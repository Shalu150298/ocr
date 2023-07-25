import { useState } from "react";
import { Link } from "react-router-dom";

import { AddProfile } from "../../../../core/Apis/Profile/profileApi";

const Profile = () => {
  const [add, setAdd] = useState();
  const [image, setImage] = useState(null);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAdd((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const profile = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('avatar', image);
    console.log(image);
    AddProfile(add, formdata)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="pagetitle">
        <h1>Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">Users</li>
            <li className="breadcrumb-item active">Profile</li>
          </ol>
        </nav>
      </div>
      <section className="section1 profile">
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <img alt="Profile" className="rounded-circle" />
                <h2>Kevin Anderson</h2>
                <h3>Web Designer</h3>
                <div className="social-links mt-2">
                  <Link to="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link> 
                  <Link to="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link to="#" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="card">
              <div class="card-body pt-3">
                <ul class="nav nav-tabs nav-tabs-bordered">
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview"
                    >
                      Overview
                    </button>
                  </li>

                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-edit"
                    >
                      Edit Profile
                    </button>
                  </li>
                </ul>
                {/* Profile Form start */}
                <form>
                  <div class="tab-content ">
                    {/* <div
                      class="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <h5 class="card-title">Profile Details</h5>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Email</div>
                        <div class="col-lg-9 col-md-8">
                          k.anderson@example.com
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Name</div>
                        <div class="col-lg-9 col-md-8">User</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Phone</div>
                        <div class="col-lg-9 col-md-8">
                          (436) 486-3538 x29071
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">DOB</div>
                        <div class="col-lg-9 col-md-8">1997-08-24</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Address</div>
                        <div class="col-lg-9 col-md-8">
                          A108 Adam Street, New York, NY 535022
                        </div>
                      </div>
                    </div> */}

                    <div
                      class="tab-pane fade profile-edit pt-3"
                      id="profile-edit"
                    >
                      <div class="row mb-3">
                        <label
                          for="profileImage"
                          class="col-md-4 col-lg-3 col-form-label"
                        >
                          Profile Image
                        </label>
                        <div class="col-md-8 col-lg-9">
                          <div class="pt-2 gap-2 d-flex">
                            <input
                              type="file"
                              onChange={(e) => {
                                setImage(e.target.files.FileList[0]);
                                console.log(e.target.files);
                              }}
                              name="avatar"
                              id="file-input"
                              style={{ display: "none" }}
                            />

                            <label
                              for="file-input"
                              class="upload-label btn btn-primary btn-sm p-1 px-1"
                              title="Upload new profile image"
                              style={{ color: "#fff" }}
                            >
                              <i class="bi bi-upload px-1"></i>

                              <span className="px-1">Upload Image</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label
                          for="Email"
                          class="col-md-4 col-lg-3 col-form-label"
                        >
                          Email
                        </label>
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="user"
                            onChange={onChange}
                            type="text"
                            class="form-control"
                            id="Email"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="fullname"
                          class="col-md-4 col-lg-3 col-form-label"
                        >
                          Name
                        </label>
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="fullname"
                            onChange={onChange}
                            type="text"
                            class="form-control"
                            id="fullname"
                          />
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label
                          for="Phone"
                          class="col-md-4 col-lg-3 col-form-label"
                        >
                          Phone
                        </label>
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="contact"
                            onChange={onChange}
                            type="text"
                            class="form-control"
                            id="Phone"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="dob"
                          class="col-md-4 col-lg-3 col-form-label"
                        >
                          DOB
                        </label>
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="dob"
                            onChange={onChange}
                            type="text"
                            class="form-control"
                            id="dob"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Address"
                          class="col-md-4 col-lg-3 col-form-label"
                        >
                          Address
                        </label>
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="address"
                            onChange={onChange}
                            type="text"
                            class="form-control"
                            id="Address"
                          />
                        </div>
                      </div>

                      <div class="text-center">
                        <button
                          type="submit"
                          onClick={profile}
                          class="btn btn-primary"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
