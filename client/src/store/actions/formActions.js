
import axios from 'axios';
import { FieldLabel } from '../../components/sharedComponents/formComponents/FieldLabel';

export const submitFormProcessing = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // console.log("AGGGGGGGHHHHH")
    let processing = true;
    dispatch({
      // type: 'FORM_PROCESSING',
      payload: processing //not necessary, just here to convey what's happening
    })
  }
}


export const initiateReviewEdit = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
      type: 'EDIT_REVIEW',
      payload: data
    })
  }
}

export const initiateReviewDelete = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
      type: 'DELETE_REVIEW',
      payload: data
    })
  }
}


export const confirmReviewDelete = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {


    dispatch({
      type: 'DELETE_PROCESSING',
    });

    const firestore = getFirestore();
    const state = getState();
    const id = state.formState.formReviewToDeleteValue.id;

    console.log("state ---> ", state);
    console.log("formReviewToDeleteValue ---> ", state.formState.formReviewToDeleteValue);
    console.log("id ---> ", id);

    firestore.collection('reviews').doc(id).delete()
      .then(res => {
        dispatch({
          type: 'DELETE_REVIEW_CONFIRMED',
          payload: res
        })
      })

  }
}

export const cancelReviewDelete = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    dispatch({
      type: 'DELETE_REVIEW_CANCELLED',
      // payload: null,
    })


  }
}


export const submitForm = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FORM_PROCESSING',
    });

    const firestore = getFirestore();
    const formState = getState().formState;
    const authState = getState().auth;

    const filteredDupesPhotoArr = formState.photosArrValue.filter(photoFile => !photoFile.data);

    // edit mode ---> formState.formEditModeValue

    // no photos at all ---> formState.photosArrValue.length === 0
    // only new photos ---> formState.photosArrValue.length > 0 && formState.photosArrValue.length === filteredDupesPhotoArr.length
    // only old photos ---> formState.photosArrValue.length > 0 && filteredDupesPhotoArr.length === 0
    // one old photo, one new photo ---> formState.photosArrValue.length > 0 && formState.photosArrValue.length !== filteredDupesPhotoArr.length && filteredDupesPhotoArr.length > 0 

    const editMode = formState.formEditModeValue ? true : false;

    const noPhotos = formState.photosArrValue.length === 0 || filteredDupesPhotoArr.length === 0;
    const newPhotos = filteredDupesPhotoArr.length > 0;
    // const oldPhotos = formState.photosArrValue.length > 0 && filteredDupesPhotoArr.length === 0;
    // const oldAndNewPhoto = formState.photosArrValue.length > 0 && formState.photosArrValue.length !== filteredDupesPhotoArr.length && filteredDupesPhotoArr.length > 0;

    const review = {

      basicInfo: {
        locationState: formState.formLocationValue.stateCode,
        restroomUsed: formState.formRestroomTypeValue,
        locationName: formState.formLocationValue.name,
        locationZip: formState.formLocationValue.zip,
        locationCountry: formState.formLocationValue.country,
        timeOfVisit: formState.formTimeOfVisitValue,
        HHOfVisit: formState.formHHOfVisitValue,
        MMOfVisit: formState.formMMOfVisitValue,
        AMPMOfVisit: formState.formAMPMOfVisitValue,
        outOfOrder: formState.formOutOfOrderValue,
        locationValue: formState.formLocationValue,
        locationNotes: formState.formLocationNotesValue,
        locationCategory: formState.formLocationValue.category || "n/a",
        locationCity: formState.formLocationValue.city
      },

      comments: formState.formCommentsValue,

      features: {
        genderNeutral: formState.formGenderNeutralValue,
        babyStation: formState.formBabyChangeValue,
        accessible: formState.formHandicappedValue,
        price: parseFloat(formState.formFeeValue),
        admission: formState.formAdmissionValue,
        cleaningSchedule: formState.formScheduleValue
      },

      locationID: formState.formLocationValue.id,

      photos: [...formState.photosArrValue.filter(photoFile => photoFile.data)],

      scores: {
        cleanliness: parseInt(formState.formCleanlinessValue),
        style: parseInt(formState.formStyleValue),
        comfort: parseInt(formState.formComfortValue),
        safety: parseInt(formState.formSafetyValue),
        privacy: parseInt(formState.formPrivacyValue),
        total: parseFloat((((parseInt(formState.formCleanlinessValue) * 9) + (parseInt(formState.formSafetyValue) * 7) + (parseInt(formState.formPrivacyValue) * 6) + (parseInt(formState.formComfortValue) * 4.5) + (parseInt(formState.formStyleValue) * 2)) / 28.5).toFixed(3))
      },

      userID: authState.loginCredentialValue.uid,
      reviewDatetime: new Date()
    };


    const saveNewReview = (review) => {
      console.log("saveNewReview triggered!");
      firestore.collection('reviews').add(
        review
      )
        .then(res => {
          dispatch({
            type: 'FORM_SUBMITTED',
            payload: res
          })
        })
        .catch(err => {
          dispatch({
            type: 'FORM_SUBMITTED_ERROR',
            payload: err
          })
        });
    }

    const updateExistingReview = (review, id) => {
      console.log("updateExistingReview triggered!");
      firestore.collection("reviews").where("userID", "==", review.userID).where("locationID", "==", review.locationID).get()
        .then(res => {
          const data = res.docs
          console.log("res of review to edit --->", res);

          data.forEach(({id}) => {
            firestore.collection('reviews').doc(id).set(
              review
            )
              .then(res => {
                dispatch({
                  type: 'FORM_SUBMITTED',
                  payload: res
                })
              })
              .catch(err => {
                dispatch({
                  type: 'FORM_SUBMITTED_ERROR',
                  payload: err
                })
              })
          })
        })

    }


    const cloudinaryCallBack = (response, review, metadataFile) => {
      console.log("cloudinaryCallBack triggered! review ---> ", review);

      const data = {
        asset_id: response.data.asset_id,
        etag: response.data.etag,
        public_id: response.data.public_id,
        version_id: response.data.version_id,
        signature: response.data.signature
      }

      const photoObj = {
        url: response.data.secure_url,
        metadata: metadataFile,
        data: data
      };

      review.photos.push(photoObj);
      
      if (review.photos.length !== formState.photosArrValue.length) return;

      if (editMode) {
        return updateExistingReview(review);
      } else {
        return saveNewReview(review);
      }

    }


    const cloudinaryUpload = (formData) => {
      console.log("cloudinaryUpload triggered!");

      const config = {
        headers: { "X-Requested-With": "XMLHttpRequest" }
      };
      return axios.post("https://api.cloudinary.com/v1_1/resteasyredux/upload", formData, config) // has promise
    }


    const photosToCloudinary = (review, photosArr, cloudinaryCallBack) => {
      console.log("photosToCloudinary triggered!");

      photosArr.forEach((file, i) => {

        const fileSrc = file.src;

        const options = {
          public_id: file.data ? file.data.public_id : null,
          overwrite: false
        };

        const formData = new FormData();

        formData.append('file', fileSrc);
        formData.append('upload_preset', "rnpjoamq");
        formData.append('options', options);

        const metadataFile = {
          "name": file.metadata.name,
          "lastModified": file.metadata.lastModified,
          "size": file.metadata.size,
          "type": file.metadata.type,
        };

        cloudinaryUpload(formData)
          .then(response => {
            console.log("cloudinaryUpload triggered!", i);
            return cloudinaryCallBack(response, review, metadataFile);
          })
          .catch(err => {
            console.error("axios error ---> ", err)
          })
      });
    };



    if (noPhotos) {
      console.log("noPhotos if statement - top...");
      if (editMode) {
        console.log("noPhotos if statement - editMode...");
        return updateExistingReview(review);
      } else {
        console.log("noPhotos if statement - not edit mode...");
        return saveNewReview(review);
      }
    };


    if (newPhotos) {
      console.log("newPhotos if statement - not edit mode...");
      photosToCloudinary(review, filteredDupesPhotoArr, cloudinaryCallBack);
    }


  };
} // end of submitForm







export const formNext = (outOfOrderInd) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FORM_NEXT',
      payload: outOfOrderInd
    })
  }
}

export const formPrev = (outOfOrderInd) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FORM_PREV',
      payload: outOfOrderInd
    })
  }
}

export const formMissingAlert = () => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FORM_MISSING_ALERT'
      // payload: outOfOrderInd
    })
  }
}

export const resetForm = () => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FORM_RESET'
    })
  }
}



export const locationChosen = (input) => {
  // console.log("location chosen, action: ", input)
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'LOCATION_CHOSEN',
      payload: input
    })
  }
}


export const radioSelected = (input) => {
  // console.log("radio clicked", input.target);

  const target = input.target;
  const name = target.name;
  const value = target.value;

  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'RADIO_SELECTED',
      payload: { name, value }
    })
  }
}

export const checkboxClicked = (input) => {
  // console.log("clicked check", input.target);

  const target = input.target;
  const name = target.name;
  const value = target.checked;
  // const checked = target.checked

  return (dispatch, getState) => {
    dispatch({
      type: 'CHECKBOX_CLICKED',
      payload: { name, value }
    })
  }
}

export const dropdownSelected = (input) => {

  // console.log("input: ", input);
  const target = input.target;
  const name = target.name;
  const value = target.value;

  // console.log("target", target);
  // console.log("name", name);
  // console.log("value", value);

  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'DROPDOWN_SELECTED',
      payload: { name, value }
    })
  }
}

export const feeChosen = (input) => {

  // console.log("input: ", input);
  // const target = input.target;
  const name = "formFeeDisplayValue";
  const value = input;
  // const value = target.value;

  // console.log("target", target);
  // console.log("name", name);
  // console.log("value", value);

  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FEE_CHOSEN',
      payload: { name, value }
    })
  }
}

export const textEntered = (input) => {

  const target = input.target;
  const name = target.name;
  const value = target.value;

  // console.log(name, value)

  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'TEXT_ENTERED',
      payload: { name, value }
    })
  }
}



export const photoInput = (photoObj) => {

  console.log("photoInput executed: ", photoObj);
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'PHOTO_SELECTED',
      payload: photoObj
    })
  }
}


export const deletePhoto = (photoArr) => {
  // console.log("deletePhoto executed: ", photoArr);
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'PHOTO_DELETED',
      payload: photoArr
    })
  }
}





  // if (formState.photosArrValue.length === 0 || (formState.photosArrValue.length !== filteredDupesPhotoArr.length)) {
  //   if (editMode) {
  //     const reviewtoEdit = firestore.collection("reviews").where("userID", "==", review.userID).where("locationID", "==", review.locationID);
  //   } else {
  //     firestore.collection('reviews').add(
  //       review
  //     )
  //       .then(res => {
  //         dispatch({
  //           type: 'FORM_SUBMITTED',
  //           payload: res
  //         })
  //       })
  //       .catch(err => {
  //         dispatch({
  //           type: 'FORM_SUBMITTED_ERROR',
  //           payload: err
  //         })
  //       });
  //   }
  // }

  // const updateExistingReview = (reviewToEdit) => {
  //   reviewToEdit.get()
  //     .then(res => {
  //       res.forEach(({ id }) => {
  //         updateExistingReview(reviewToEdit, id);
  //       })
  //     });
  // };

  // firestore.collection('reviews').doc(id).set(
  //   review
  // )
  //   .then(res => {
  //     dispatch({
  //       type: 'FORM_SUBMITTED',
  //       payload: res
  //     })
  //   })
  //   .catch(err => {
  //     dispatch({
  //       type: 'FORM_SUBMITTED_ERROR',
  //       payload: err
  //     })
  //   });
  // was from cloudinary