/* eslint-disable react/prop-types */
import '../styles.css';


function OtherData({userData}) {

  return (
    <>
      <div className="otherData-box">
      {/* Displays the user's address information */}
      <strong>Street:</strong>  {userData.address.street}<br />
      <strong>City:</strong> {userData.address.city}<br />
       <strong>Zip Code:</strong> {userData.address.zipcode}<br />

      </div>
    </>
  )
}

export default OtherData
