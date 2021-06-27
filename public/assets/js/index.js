const handleSignupSubmit = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  if (password === confirmPassword) {
    const requestBody = {
      username: username,
      password: password,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(requestBody),
    };

    const response = await fetch("/auth/sign-up", options);

    if (response.status === 200) {
      window.location.replace("/login");
    } else {
      console.log("Failed to signup");
    }
  } else {
    console.log("Passwords do not match");
  }
};

const handleLoginSubmit = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();

  const requestBody = {
    username: username,
    password: password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(requestBody),
  };

  const response = await fetch("/auth/login", options);

  if (response.status === 200) {
    window.location.replace("/dashboard");
  } else {
    console.log("Failed to login");
  }
};

const handleLogoutClick = async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch("/auth/logout", options);

  if (response.status === 200) {
    window.location.replace("/login");
  } else {
    console.log("Failed to logout");
  }
};

const handleCommentSubmit = async (event) => {
  event.preventDefault();

  const { id } = event.currentTarget;
  const message = $("#comment").val();

  console.log(id, message);

  const requestBody = { message };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(requestBody),
  };

  const response = await fetch(`/api/posts/${id}/comments`, options);

  if (response.status === 200) {
    window.location.replace(window.location.pathname);
  } else {
    console.log("Failed to post comment");
  }
};

const handlePostSubmit = async (event) => {
  event.preventDefault();

  const title = $("#blog-title").val();
  const body = $("#blog-content").val();

  const requestBody = {
    title,
    body,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(requestBody),
  };

  const response = await fetch(`/api/posts`, options);

  if (response.status === 200) {
    window.location.replace("/dashboard");
  } else {
    console.log("Failed to create post");
  }
};

const handlePostDelete = () => {
  // DELETE request for post id
  // /api/posts/{postId}
  // on success window location to /dashboard
};

const handleCommentDelete = async (event) => {
  const { id } = event.currentTarget;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch(`/api/comments/${id}`, options);

  if (response.status === 200) {
    window.location.replace(window.location.pathname);
  } else {
    console.log("Failed to delete comment");
  }
};

console.log("client-side JS");
$("#login-form").submit(handleLoginSubmit);
$("#sign-up-form").submit(handleSignupSubmit);
$("#logout-btn").click(handleLogoutClick);
$('[name="delete-comment-btn"]').click(handleCommentDelete);
$('[name="comment-form"]').submit(handleCommentSubmit);
$("#create-blog").submit(handlePostSubmit);
