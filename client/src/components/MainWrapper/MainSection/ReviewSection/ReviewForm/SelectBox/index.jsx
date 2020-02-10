import React, { Component } from 'react'


export class SelectBox extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_text,
      data_justifyContent,
      data_bgcolor,
      data_fontcolor,
      data_name,
      data_fontsize,
      data_width,
      data_height,
      data_color,
      data_fontstyle,
      data_value,
      func_handlechange,
      children
    } = this.props;

    // func_handlechange();


    return (
      <select
        id={data_id}
        className="rs"
        name={data_name ? data_name : null}
        defaultValue={data_value}
        onChange={e => func_handlechange(e)}
        style={{
          width: data_width ? data_width : null,
          height: data_height ? data_height : null,
          // width: "66%",
          // height: "75%",
          // borderBottom: "1px dotted lightgrey",
          fontSize: data_fontsize ? data_fontsize : "14.5px",
          fontStyle: data_fontstyle ? data_fontstyle : "italic",
          color: data_color ? data_color : "grey"
        }}
      >
        {children}
      </select>
    )
  }
}

export default SelectBox;
