import { useEffect, useState } from "react";
import axios from "axios";

function AuthorityDashboard() {

  const [totalTourists, setTotalTourists] = useState(0);


  useEffect(() => {

    const getTouristCount = async () => {

      try {

        const response = await axios.get(
          "http://localhost:5001/api/tourists/count"
        );

        setTotalTourists(response.data.totalTourists);

      } catch (error) {

        console.log("Error fetching tourists:", error);

      }

    };


    getTouristCount();

  }, []);



  return (

    <div className="min-h-screen bg-gray-100">


      {/* Header */}

      <div className="bg-green-700 text-white p-6">

        <h1 className="text-3xl font-bold">
          Authority Dashboard
        </h1>

        <p className="mt-2">
          TravelX Tourism Safety Monitoring System
        </p>

      </div>



      {/* Statistics */}

      <div className="grid grid-cols-4 gap-6 p-8">


        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-lg font-bold">
            Total Verified Tourists
          </h2>

          <p className="text-4xl text-blue-700 mt-4">
            {totalTourists}
          </p>

        </div>



        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-lg font-bold">
            Currently Travelling
          </h2>

          <p className="text-4xl text-green-700 mt-4">
            0
          </p>

        </div>




        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-lg font-bold">
            Completed Trips
          </h2>

          <p className="text-4xl text-blue-600 mt-4">
            0
          </p>

        </div>




        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-lg font-bold">
            Emergency Alerts
          </h2>

          <p className="text-4xl text-red-600 mt-4">
            0
          </p>

        </div>


      </div>





      {/* Monitoring */}

      <div className="px-8">

        <div className="bg-white p-8 rounded-xl shadow">


          <h2 className="text-2xl font-bold">
            Live Tourist Monitoring
          </h2>



          <div className="mt-6 bg-gray-200 h-64 rounded-xl flex items-center justify-center">


            <div className="text-center">


              <h3 className="text-xl font-bold">
                AI Tourist Cluster Monitoring Map
              </h3>


              <p className="mt-3 text-gray-700">
                DBSCAN based tourist density clusters
              </p>


              <p className="text-gray-700">
                Isolation Forest abnormal movement detection
              </p>


              <p className="text-gray-700">
                Random Forest safety score prediction
              </p>


            </div>


          </div>


        </div>

      </div>





      {/* Safety Section */}

      <div className="grid grid-cols-3 gap-6 p-8">


        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="font-bold text-xl">
            High Risk Zones
          </h2>

          <p className="mt-3">
            No active threats detected
          </p>

        </div>




        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="font-bold text-xl">
            Missed Check-ins
          </h2>

          <p className="mt-3">
            No pending check-ins
          </p>

        </div>




        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="font-bold text-xl">
            SOS Requests
          </h2>

          <p className="mt-3">
            No active requests
          </p>

        </div>



      </div>


    </div>

  );

}


export default AuthorityDashboard;
