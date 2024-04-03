import seatSvg from "../../../assets/svg/seat.svg";
import { useState } from "react";

const SeatsModal = ({ hall, hallPrice, formik }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (rowIndex, seatIndex) => {
    const seat = hall.seats.find(
      (seat) => seat.row === rowIndex + 1 && seat.column === seatIndex + 1
    );


    const isSelected = selectedSeats.some(
      (selectedSeat) =>
        selectedSeat.row === rowIndex + 1 &&
        selectedSeat.column === seatIndex + 1
    );

    if (isSelected) {
      setSelectedSeats(
        selectedSeats.filter(
          (selectedSeat) =>
            !(
              selectedSeat.row === rowIndex + 1 &&
              selectedSeat.column === seatIndex + 1
            )
        )
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        { row: rowIndex + 1, column: seatIndex + 1 },
      ]);
    }

    const newSeats = hall.seats.map((seat) => {
      if (seat.row === rowIndex + 1 && seat.column === seatIndex + 1) {
        return { ...seat, status: isSelected ? "Available" : "None" };
      }
      return seat;
    });

    const newHalls = formik.values.halls.map((h) => {
      if (h.name === hall.name) {
        return { ...h, seats: newSeats };
      }
      return h;
    });

    formik.setFieldValue("halls", newHalls);
  };

  return (
    <div className='w-full px-10 py-3'>
      <p>Price: {hallPrice}$</p>
      {hall.seats &&
        Array.from({ length: hall.row }).map((_, rowIndex) => (
          <div key={rowIndex} className='flex p-1 items-center'>
            <div className='w-16'>Row: {rowIndex + 1}</div>
            {hall.seats
              .filter((seat) => seat.row === rowIndex + 1)
              .map((seat, seatIndex) => (
                <div
                  key={seatIndex}
                  className={`w-10 h-10 flex items-center justify-center border border-gray-300 m-1 rounded-xl hover:cursor-pointer bg-${
                    seat.status === "None"
                      ? "gray"
                      : "green"
                  }-400 p-1.5`}
                  onClick={() => handleSeatClick(rowIndex, seatIndex)}
                >
                  {selectedSeats.some(
                    (selectedSeat) =>
                      selectedSeat.row === rowIndex + 1 &&
                      selectedSeat.column === seatIndex + 1
                  ) ? (
                    "+"
                  ) : (
                    <img src={seatSvg} />
                  )}
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default SeatsModal;
