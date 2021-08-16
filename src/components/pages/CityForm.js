"use strict";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class CityForm extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <form onSubmit={(e) => this.props.renderForm(e)}>
        <fieldset>
          <label>cat name</label>
          <input type="text" name="name" />
          <label>cat breed</label>
          <input type="submit" value="Update" />
        </fieldset>
      </form>
=======
    //   <form onSubmit={(e) => this.props.renderForm(e)}>
    //     <fieldset>
    //       <label>cat name</label>
    //       <input type="text" name="name" />
    //       <label>cat breed</label>
    //       <input type="submit" value="Update" />
    //     </fieldset>
    //   </form>
>>>>>>> 5c118d8fdac01dd6faba6452e0faade3035f79c0
    );
  }
}

export default CityForm;
