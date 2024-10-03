import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faCheck } from "@fortawesome/free-solid-svg-icons";
import user1 from "../../assets/images/engagement/user1.png";
import user2 from "../../assets/images/engagement/user2.png";
import user3 from "../../assets/images/engagement/user3.png";
import user4 from "../../assets/images/engagement/user4.png";
import Heading from "../Styles/Heading";
import Button from "../Styles/Button";

const CreateBroadcastPopup = ({ onClose }) => {
  const [selectedPeople, setSelectedPeople] = useState([]);

  const people = [
    { name: "Kierra Stanton", id: 1, image: user1 },
    { name: "Ahmad Geidt", id: 2, image: user2 },
    { name: "Kierra Stanton", id: 3, image: user3 },
    { name: "Ahmad Geidt", id: 4, image: user4 },
  ];

  const handleSelect = (person) => {
    setSelectedPeople((prevSelected) =>
      prevSelected.includes(person)
        ? prevSelected.filter((p) => p !== person)
        : [...prevSelected, person]
    );
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <Heading text={"< New broadcast"} />
        <div className="mb-4">
          {/* Selected People */}
          <div className="flex space-x-2 mb-4">
            {selectedPeople.map((person) => (
              <div key={person.id} className="relative">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-8 w-8 rounded-full"
                />
                <div
                  className="absolute top-0 right-6 h-4 w-4 bg-[#212529] rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => handleSelect(person)}
                >
                  <FontAwesomeIcon icon={faMinus} className="text-white" />
                </div>
              </div>
            ))}
          </div>
          <div className="mb-5">
            <Heading text={"Add people"} />
          </div>

          {/* People List */}
          {people.map((person) => (
            <div
              key={person.id}
              className="flex items-center justify-between py-4 font-light cursor-pointer"
              onClick={() => handleSelect(person)}
            >
              <div className="flex items-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-8 w-8 rounded-full mr-2"
                />
                <span>{person.name}</span>
              </div>
              <div
                className={`h-5 w-5 border rounded-full flex items-center justify-center ${
                  selectedPeople.includes(person)
                    ? "bg-blue-500 border-blue-500"
                    : "bg-white border-gray-300"
                }`}
              >
                {selectedPeople.includes(person) && (
                  <FontAwesomeIcon icon={faCheck} className="text-white" />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button text={"Done"} onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default CreateBroadcastPopup;
