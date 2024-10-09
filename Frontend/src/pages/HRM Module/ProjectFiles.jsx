import "./styles/ProjectFiles.css";
import UpdatesFiles from "../../components/UpdatesFiles";
import ProjectNavbar from "../../components/ProjectNavbar";
import downloadicon from "../../assets/icons/Downloading Updates.png";
import listicon from "../../assets/icons/Playlist.png";
import gridicon from "../../assets/icons/Grid.png";
import Side from "../../components/ProjectSidebar";
import { useState } from "react";

const dashboardImages = [
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.s2NF0TvLBeQbcwSbCl71wAHaEK&pid=Api&P=0&h=180",
    name: "Dashboard Image 1",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.s2NF0TvLBeQbcwSbCl71wAHaEK&pid=Api&P=0&h=180",
    name: "Dashboard Image 2",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.Cc-JybI6M7luuPwN96edVAHaEc&pid=Api&P=0&h=180",
    name: "Dashboard Image 3",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.Cc-JybI6M7luuPwN96edVAHaEc&pid=Api&P=0&h=180",
    name: "Dashboard Image 3",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.Cc-JybI6M7luuPwN96edVAHaEc&pid=Api&P=0&h=180",
    name: "Dashboard Image 3",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.Cc-JybI6M7luuPwN96edVAHaEc&pid=Api&P=0&h=180",
    name: "Dashboard Image 3",
  },
];

const ProjectFiles = () => {
  const [activeView, setActiveView] = useState("grid");

  const handleViewChange = (view) => {
    setActiveView(view); // Set the active view when a button is clicked
  };

  return (
    <>
      <div className="WithNav">
        <UpdatesFiles />
        <div className="Filescontainer">
          {/* Main Content */}
          <div className="main-content">
            {/* Switch and Download Area */}
            {/* Action Bar */}
            <div className="action-bar">
              <button className="add-file-button"> + Add file</button>
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for files"
                />
                <i className="fas fa-search search-icon"></i>
              </div>

              {/* Toggle Button and Download Icon */}
              <div className="toggle-download">
                <div className="gridlist">
                  <button
                    className={`Gridbtn ${
                      activeView === "grid" ? "active" : ""
                    }`}
                    onClick={() => handleViewChange("grid")}
                  >
                    <img src={gridicon} alt="Grid view" />
                  </button>

                  <button
                    className={`Listbtn ${
                      activeView === "list" ? "active" : ""
                    }`}
                    onClick={() => handleViewChange("list")}
                  >
                    <img src={listicon} alt="List view" />
                  </button>
                </div>
                <button className="download-button">
                  <img src={downloadicon} alt="Download" />
                </button>
              </div>
            </div>
            {/* Files Section */}
            <div className="files-section">
              <div className={`files-${activeView}`}>
                {dashboardImages.map((image, index) => (
                  <div key={index} className="file-card">
                    <img
                      src={image.src}
                      alt={image.name}
                      className="file-image"
                    />
                    <div className="ImageName">{image.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectFiles;
