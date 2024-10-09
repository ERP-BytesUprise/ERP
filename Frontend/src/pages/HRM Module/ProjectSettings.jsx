import "./styles/ProjectSettings.css";
import image from "../../assets/icons/Logo 1.png";

const ProjectSettings = () => {
  return (
    <div className="ProjectSetting">
      <h2 className="ProjectTitle">Project Settings</h2>

      <div className="ChangeIcon">
        <img src={image}></img>

        <button>Change Icon</button>
        <p className="Asterikfont">
          Required fields are marked with an asterisk
          <span className="Asterik">*</span>
        </p>
      </div>
      <div className="ProjectForm">
        <form action="">
          <label>
            <p>
              {" "}
              Name<span className="Asterik">*</span>
            </p>
            <input type="text" placeholder="package GPS tracker" required />
          </label>

          <label>
            <p>
              {" "}
              Key<span className="Asterik">*</span>
            </p>{" "}
            <input type="text" placeholder="PGT" required />
          </label>
          <label>
            Category
            <select>
              <option value=""> --Choose a category--</option>
              <option value=""> Fullstack </option>
              <option value=""> Software Development</option>
              <option value="">Artificial Intellienc</option>
            </select>
          </label>
          <label>
            Project Lead
            <select>
              <option value=""> --select--</option>
              <option value=""> Tanaya</option>
              <option value=""> Pradeek</option>
              <option value=""> Raju</option>
            </select>
          </label>
          <label>
            Default Assignee
            <select>
              <option value=""> Assigned</option>
              <option value=""> Unassigned</option>
            </select>
          </label>

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectSettings;
