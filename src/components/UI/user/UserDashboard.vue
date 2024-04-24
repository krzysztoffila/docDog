<template>
  <div class="container mx-auto px-4">
    <div class="row">
      <div class="col-md-3">
        <div class="text-center mb-4">
          <img
            :src="avatarUrl"
            alt="avatar"
            class="avatar img-circle img-thumbnail mx-auto"
          />
          <h6>Upload a different photo...</h6>
          <input type="file" class="text-center center-block file-upload" />
        </div>
        <div class="card bg-gray-100 shadow-md rounded-md mb-4">
          <div class="card-header px-4 py-2 font-bold text-gray-700">
            Website <i class="fas fa-link text-xl"></i>
          </div>
          <div class="card-body px-4 py-2">
            <a :href="websiteUrl" class="text-gray-600 hover:text-blue-500"
              >bootnipets.com</a
            >
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-gray-600">
            Activity <i class="fas fa-dashboard text-xl"></i>
          </li>
          <li
            class="list-group-item d-flex justify-content-between text-gray-600"
          >
            <span>Shares</span>
            <span>125</span>
          </li>
        </ul>
        <div class="card">
          <div class="card-header">Social Media</div>
          <div class="card-body flex justify-center">
            <i class="fab fa-facebook fa-2x mr-4"></i>
            <i class="fab fa-github fa-2x mr-4"></i>
            <i class="fab fa-twitter fa-2x mr-4"></i>
            <i class="fab fa-pinterest fa-2x mr-4"></i>
            <i class="fab fa-google-plus fa-2x"></i>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <h1>{{ userName }}</h1>
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              href="#home"
              class="nav-link active"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              aria-controls="home"
              aria-selected="true"
              >Home</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#messages"
              class="nav-link"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#messages"
              aria-controls="messages"
              aria-selected="false"
              >Menu 1</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#settings"
              class="nav-link"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#settings"
              aria-controls="settings"
              aria-selected="false"
              >Menu 2</a
            >
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane active" id="home">
            <hr />

            <form class="form" action="##" method="post" id="registrationForm">
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="first_name"><h4>First name</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="first_name"
                    id="first_name"
                    placeholder="first name"
                    title="enter your first name if any."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="last_name"><h4>Last name</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="last_name"
                    id="last_name"
                    placeholder="last name"
                    title="enter your last name if any."
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="phone"><h4>Phone</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    id="phone"
                    placeholder="enter phone"
                    title="enter your phone number if any."
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="mobile"><h4>Mobile</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="mobile"
                    id="mobile"
                    placeholder="enter mobile number"
                    title="enter your mobile number if any."
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="email"><h4>Email</h4></label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="you@email.com"
                    title="enter your email."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="email"><h4>Location</h4></label>
                  <input
                    type="email"
                    class="form-control"
                    id="location"
                    placeholder="somewhere"
                    title="enter a location"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="password"><h4>Password</h4></label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    placeholder="password"
                    title="enter your password."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="password2"><h4>Verify</h4></label>
                  <input
                    type="password"
                    class="form-control"
                    name="password2"
                    id="password2"
                    placeholder="password2"
                    title="enter your password2."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-12">
                  <br />
                  <button class="btn btn-lg btn-success" type="submit">
                    <i class="glyphicon glyphicon-ok-sign"></i> Save
                  </button>
                  <button class="btn btn-lg" type="reset">
                    <i class="glyphicon glyphicon-repeat"></i> Reset
                  </button>
                </div>
              </div>
            </form>

            <hr />
          </div>
          <div class="tab-pane" id="settings">
            <h2></h2>

            <hr />
            <form class="form" action="##" method="post" id="registrationForm">
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="first_name"><h4>First name</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="first_name"
                    id="first_name"
                    placeholder="first name"
                    title="enter your first name if any."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="last_name"><h4>Last name</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="last_name"
                    id="last_name"
                    placeholder="last name"
                    title="enter your last name if any."
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="phone"><h4>Phone</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    id="phone"
                    placeholder="enter phone"
                    title="enter your phone number if any."
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="mobile"><h4>Mobile</h4></label>
                  <input
                    type="text"
                    class="form-control"
                    name="mobile"
                    id="mobile"
                    placeholder="enter mobile number"
                    title="enter your mobile number if any."
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="email"><h4>Email</h4></label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="you@email.com"
                    title="enter your email."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="email"><h4>Location</h4></label>
                  <input
                    type="email"
                    class="form-control"
                    id="location"
                    placeholder="somewhere"
                    title="enter a location"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="password"><h4>Password</h4></label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    placeholder="password"
                    title="enter your password."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="password2"><h4>Verify</h4></label>
                  <input
                    type="password"
                    class="form-control"
                    name="password2"
                    id="password2"
                    placeholder="password2"
                    title="enter your password2."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-12">
                  <br />
                  <button class="btn btn-lg btn-success" type="submit">
                    <i class="glyphicon glyphicon-ok-sign"></i> Save
                  </button>
                  <button class="btn btn-lg" type="reset">
                    <i class="glyphicon glyphicon-repeat"></i> Reset
                  </button>
                </div>
              </div>
            </form>

            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      userName: "John Doe",
      avatarUrl: "https://www.bootnipets.com/img/avatars/profile-pic.png",
      websiteUrl: "https://bootnipets.com",
    };
  },
};
</script>
