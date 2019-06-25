import React from "react";
import "./LostAndFound.css";

function Found() {
    return (
      <div id="found">
        <nav class="row navbar navbar-dark" id="topNavbar">
                <div class="col-md-2"></div>
                <div class="col-md-8" id="navText">Found</div>
                <div class="col-md-2"></div>
        </nav>

        <div class="found-container">
            <table class="table table-hover">
                 <thead class="headBorder">
                     <tr class="col-md-12 tableHeading">
                          <th scope="row">Please tell us some specificts about the item you found</th>
                    </tr>
                </thead>
            </table>
            <table class="table table-hover tableDiv">
                <tbody>
                    <tr class="table-info tableDescription">
                        <th scope="row">
                            <form>
                                <div class="form-group row">
                                    <label for="person-name">Your Full Name</label>
                                    <input class="form-control" id="person-name" type="text"/>
                                </div>
                                <div class="form-group row">
                                    <label for="location">Give us the rough location or main intersection where you found the item</label>
                                    <input class="form-control" id="location" type="text"/>
                                </div>
                                <div class="form-group row">
                                    <label for="city">City</label>
                                    <input class="form-control" id="city" type="text"/>
                                </div>
                                <div class="form-group row">
                                    <label for="state">State</label>
                                    <input class="form-control" id="state" type="text"/>
                                </div>
                                <div class="form-group row">
                                    <label for="country">Country</label>
                                    <input class="form-control" id="country" type="text"/>
                                </div>
                                <div class="form-group row">
                                    <label for="frequency-time">Please tell us color of the item you found</label>
                                    <input class="form-control" id="frequency-time" type="text"/>
                                </div>
                                <div class="form-group row">
                                    <label for="frequency-time">Please give us little discription about the item you found</label>
                                    <input class="form-control" id="item-description" type="text"/>
                                </div>
                                <button class="btn btn-primary" id="submit-info" type="submit">Submit</button>
                            </form>

                         </th>
                                                    
                    </tr>
                                                
                </tbody>
                                        
            </table>
        </div>
      </div>
    );
  }
  
  export default Found;