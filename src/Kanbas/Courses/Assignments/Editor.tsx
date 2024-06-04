export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container">
      <div id="wd-assignment-name" className="mb-4">
        <label htmlFor="wd-assignment-name-input" className="col-form-label">
          Assignment Name
        </label>
        <div id="wd-assignment-name-input">
          <input
            id="wd-name"
            value="A1"
            className="border rounded-3 p-3"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div id="wd-description" className="mb-4">
        <div className="border rounded-3 p-3" contentEditable="true">
          <p style={{ marginBottom: "10px" }}>
            The assignment is{" "}
            <span style={{ color: "red" }}>available online</span>
          </p>
          <p style={{ marginBottom: "10px" }}>
            Submit a link to the landing page of your web application running on
            Netlify.
          </p>
          <p style={{ marginBottom: "10px" }}>
            The landing page should include the following:
          </p>
          <ul style={{ marginBottom: "10px" }}>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Links to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <p style={{ marginBottom: "10px" }}>
            The Kanbas application should include a link to navigate back to the
            landing page.
          </p>
        </div>
      </div>

      <div
        id="wd-assignment-points"
        className="row mb-4 d-flex justify-content-end"
      >
        <label
          htmlFor="wd-assignment-point-input"
          className="d-flex col-form-label col-sm-2 me-3 align-items-center justify-content-end"
        >
          Points
        </label>
        <div
          id="wd-assignment-point-input"
          className="d-flex col-sm-9"
          contentEditable="true"
        >
          <input
            id="wd-name"
            value="100"
            className="border rounded-3 p-3"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div
        id="wd-assignment-group-list"
        className="row mb-4 d-flex justify-content-end"
      >
        <label
          htmlFor="wd-assignment-group-select"
          className="d-flex col-form-label col-sm-2 me-3 align-items-center justify-content-end"
        >
          Assignment Group
        </label>
        <div id="wd-assignment-group-select" className="d-flex col-sm-9 ">
          <select className="form-select border rounded-3 p-3">
            <option value="QUIZZES">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
            <option value="THESIS">THESIS</option>
          </select>
        </div>
      </div>

      <div
        id="wd-assignment-grade-list"
        className="row mb-4 d-flex justify-content-end"
      >
        <label
          htmlFor="wd-assignment-grade-select"
          className="d-flex col-form-label col-sm-2 me-3 align-items-center justify-content-end"
        >
          Display Grade as
        </label>
        <div id="wd-assignment-grade-select" className="d-flex col-sm-9 ">
          <select
            className="form-select border rounded-3 p-3"
            style={{ width: "100%", height: "60px" }}
          >
            <option value="QUIZZES">Percentage</option>
            <option value="QUIZZES">GPA</option>
          </select>
        </div>
      </div>

      <div
        id="wd-assignment-submission-type-list"
        className="row mb-4 d-flex justify-content-end"
      >
        <label
          htmlFor="wd-assignment-type-select"
          className="d-flex col-form-label col-sm-2 me-3 justify-content-end"
        >
          Submission Type
        </label>
        <div className="d-flex col-sm-9">
          <div
            className="border rounded-3 p-3"
            style={{ width: "100%", height: "300px" }}
          >
            <select
              id="wd-assignment-type-select"
              className="form-select border rounded-3"
              style={{ width: "100%", height: "40px", marginBottom: "10px" }}
            >
              <option value="QUIZZES">Online</option>
              <option value="QUIZZES">Onsite</option>
            </select>

            <label
              className="d-flex col-form-label align-items-center fw-bold"
              style={{ marginBottom: "10px" }}
            >
              Online Entry Options
            </label>

            <div
              id="wd-online-entry-select"
              className="form-check"
              style={{ marginBottom: "10px" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="text-entry"
              ></input>
              <label className="form-check-label" htmlFor="text-entry">
                Text Entry
              </label>
            </div>

            <div
              id="wd-online-entry-select"
              className="form-check"
              style={{ marginBottom: "10px" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="websiteURL"
                checked
              ></input>
              <label className="form-check-label" htmlFor="websiteURL">
                Website URL
              </label>
            </div>

            <div
              id="wd-online-entry-select"
              className="form-check"
              style={{ marginBottom: "10px" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="media-recordings"
              ></input>
              <label className="form-check-label" htmlFor="media-recordings">
                Media Recordings
              </label>
            </div>

            <div
              id="wd-online-entry-select"
              className="form-check"
              style={{ marginBottom: "10px" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="student-annotation"
              ></input>
              <label className="form-check-label" htmlFor="student-annotation">
                Student Annotation
              </label>
            </div>

            <div
              id="wd-online-entry-select"
              className="form-check"
              style={{ marginBottom: "10px" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="file-uploads"
              ></input>
              <label className="form-check-label" htmlFor="file-uploads">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      <div
        id="wd-assignment-assign-list"
        className="row mb-4 d-flex justify-content-end mb-5"
      >
        <label className="d-flex col-form-label col-sm-2 me-3 justify-content-end">
          Assign
        </label>
        <div className="d-flex col-sm-9">
          <div
            className="border rounded-3 p-3"
            style={{ width: "100%", height: "300px" }}
          >
            <div>
              <label
                htmlFor="assign-to"
                className="d-flex col-form-label align-items-center fw-bold"
                style={{ marginBottom: "10px" }}
              >
                Assign to
              </label>
              <input
                type="text"
                className="form-control"
                id="assign-to"
                value="Everyone"
                data-role="tagsinput"
              ></input>
            </div>

            <div>
              <label
                htmlFor="due-date"
                className="d-flex col-form-label align-items-center fw-bold"
                style={{ marginBottom: "10px" }}
              >
                Due
              </label>
              <input
                type="date"
                className="form-control"
                id="due-date"
                value="2024-05-13"
                style={{ marginBottom: "10px" }}
              ></input>
            </div>

            <div className="d-flex">
              <div className="col-sm-6 pe-2">
                <label
                  htmlFor="start-date"
                  className="col-form-label align-items-center fw-bold"
                  style={{ marginBottom: "10px" }}
                >
                  Available from
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="start-date"
                  value="2024-05-06"
                  style={{ marginBottom: "10px" }}
                ></input>
              </div>

              <div className="col-sm-6 ps-2">
                <label
                  htmlFor="end-date"
                  className="col-form-label align-items-center fw-bold"
                  style={{ marginBottom: "10px" }}
                >
                  Until
                </label>
                <input
                  type="date"
                  className="form-control "
                  id="end-date"
                  value="2024-05-20"
                  style={{ marginBottom: "10px" }}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>


      <hr />
      <div id="wd-assignment-buttons" className="d-flex justify-content-end mb-5">
        <button
          id="wd-cancel-assignment-btn"
          className="btn btn-lg btn-secondary me-2 rounded-1 border"
        >
          Cancel
        </button>

        <button
          id="wd-save-assignment-btn"
          className="btn btn-lg btn-danger text-white me-3 rounded-1 border"
        >
          Save
        </button>
      </div>
    </div>
  );
}
