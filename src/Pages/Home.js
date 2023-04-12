import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import { useSelector, useDispatch } from "react-redux";
import { addTimer, countDown } from "../services/timerSlice";

const Home = () => {
  const [seconds, setSeconds] = useState();
  const timers = useSelector((state) => state.timers);
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addTimer(seconds));
    setSeconds("");
  };

  useEffect(() => {
    setInterval(() => {
      dispatch(countDown());
    }, 10);
  }, []);
  return (
    <div>
      <h1 className="text-sky-600 text-2xl font-bold ">TIMERS</h1>
      <div className="grid lg:grid-cols-2 mt-4 lg:gap-20 gap-8">
        <div className="bg-gray-200 h-full px-4 py-4 max-lg:order-last">
          <h1 className="font-semibold text-lg">List Of Timers</h1>
          <div className="mt-5  ">
            <DataTable data={timers} />
          </div>
        </div>
        <div className=" px-4 py-4 ">
          <h1 className="font-semibold text-lg">Add Timer</h1>
          <form className="mt-5 min-h-1/2 grid md:grid-cols-2 gap-4">
            <input
              className="border border-gray-500 rounded px-3 py-2"
              type="number"
              value={seconds}
              min={0}
              placeholder="Timer in Seconds"
              onChange={(e) => setSeconds(e.target.value)}
            />
            <div className="lg:w-1/2 max-lg:h-10">
              <button
                type="submit"
                className="bg-sky-400 rounded flex justify-center items-center w-full h-full font-bold text-lg text-white"
                onClick={handleOnSubmit}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
