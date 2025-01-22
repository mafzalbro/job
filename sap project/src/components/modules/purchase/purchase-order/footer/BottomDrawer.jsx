import React, { useState } from "react";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import Button from "../../../../common/Button";
import { IoIosArrowDown } from "react-icons/io";

const AnimatedBottomDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Error");

  const tabData = {
    Error: Array.from({ length: 5 }, (_, i) => ({
      message: `Error message ${i + 1}`,
      help: `Help info ${i + 1}`,
      feedback: `Feedback ${i + 1}`,
      context: `Context ${i + 1}`,
      dateTime: new Date().toLocaleString(),
      id: `E-${i + 1}`,
    })),
    Warnings: Array.from({ length: 3 }, (_, i) => ({
      message: `Warning message ${i + 1}`,
      help: `Help info ${i + 1}`,
      feedback: `Feedback ${i + 1}`,
      context: `Context ${i + 1}`,
      dateTime: new Date().toLocaleString(),
      id: `W-${i + 1}`,
    })),
    Information: Array.from({ length: 7 }, (_, i) => ({
      message: `Info message ${i + 1}`,
      help: `Help info ${i + 1}`,
      feedback: `Feedback ${i + 1}`,
      context: `Context ${i + 1}`,
      dateTime: new Date().toLocaleString(),
      id: `I-${i + 1}`,
    })),
  };

  return (
    <>
      {/* Drawer Trigger Button */}
      <Button
        className="fixed bottom-5 right-5 px-4 py-2 rounded-full shadow-lg bg-primary text-background hover:bg-hoverBg transition-transform duration-300"
        onClick={() => setIsOpen(true)}
      >
        <AiOutlineInfoCircle className="mr-2" /> Logs
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-text/80 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-background rounded-t-lg shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${isOpen ? "translate-y-0" : "translate-y-full"
          } h-1/2 overflow-y-auto`}
      >
        <div className="p-6">
          {/* Drawer Header */}
          <div className="flex justify-between items-center sticky top-4 bg-background pb-2">
            <h2 className="text-xl font-bold text-primary">Resolve Issues</h2>

            {/* Tabs */}
            <div className="flex space-x-4 mt-4">
              {["Error", "Warnings", "Information"].map((tab) => (
                <Button
                  variant={tab === "Error" ? "danger" : tab === "Warnings" ? "warning" : "secondary"}
                  key={tab}
                  disabled={tab === activeTab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg hover:bg-hoverBg transition`}
                >
                  {tab}
                </Button>
              ))}
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              className=" hover:bg-hoverBg text-background !p-2 rounded-full"
            >
              <IoIosArrowDown />
            </Button>
          </div>

          {/* Tab Content */}
          <div className="mt-6 overflow-x-auto">
            <table className="table-auto w-full text-left bg-white rounded-lg shadow-lg text-text">
              <thead>
                <tr className="bg-border text-white">
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Message</th>
                  <th className="px-4 py-2">Help</th>
                  <th className="px-4 py-2">Feedback</th>
                  <th className="px-4 py-2">Context</th>
                  <th className="px-4 py-2">Date/Time</th>
                  <th className="px-4 py-2">Message ID</th>
                </tr>
              </thead>
              <tbody>
                {tabData[activeTab].map((item, index) => (
                  <tr key={item.id} className="bg-background hover:bg-background/50">
                    <td className="px-4 py-2 text-primary">{index + 1}</td>
                    <td className="px-4 py-2">{item.message}</td>
                    <td className="px-4 py-2">{item.help}</td>
                    <td className="px-4 py-2">{item.feedback}</td>
                    <td className="px-4 py-2">{item.context}</td>
                    <td className="px-4 py-2">{item.dateTime}</td>
                    <td className="px-4 py-2">{item.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-4 text-lightGray text-sm text-right">
            {new Date().toLocaleString()}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedBottomDrawer;
