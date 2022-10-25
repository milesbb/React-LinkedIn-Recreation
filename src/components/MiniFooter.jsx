const MiniFooter = () => {
  return (
    <div
      className="text-center mt-3"
      style={{ fontSize: "0.8rem", color: "gray" }}
    >
      <span className="mx-2">
        <a href="" style={{ color: "gray" }}>
          About
        </a>
      </span>
      <span className="mx-2">
        <a href="" style={{ color: "gray" }}>
          Accessibility
        </a>
      </span>
      <span className="mx-2">
        <a href="" style={{ color: "gray" }}>
          Help Center
        </a>
      </span>
      <br></br>
      <span className="mx-2">
        <a href="" style={{ color: "gray" }}>
          Privacy & Terms
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          style={{ color: "gray" }}
          className="bi bi-chevron-down ml-1"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </span>
      <span className="mx-2">
        <a href="" style={{ color: "gray" }}>
          Ad Choices
        </a>
      </span>
      <br></br>
      <span className="mx-2">
        <a href="" style={{ color: "gray" }}>
          Advertising
        </a>
      </span>

      <span className="mx-2">
        <a href="" style={{ color: "gray" }}>
          Business Services
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          style={{ color: "gray" }}
          className="bi bi-chevron-down ml-1"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </span>
      <br></br>
      <span className="mx-2">
        <a href="" style={{ color: "gray" }}>
          Get the LinkedIn app
        </a>
      </span>
      <span className="mx-2">
        <a href="" style={{ color: "gray" }}>
          More
        </a>
      </span>
      <p className="mx-2 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          style={{ color: "#0766c2" }}
          className="bi bi-linkedin mr-1"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
        <span style={{ color: "black" }}>LinkedIn Corporation © 2022</span>
      </p>
    </div>
  );
};

export default MiniFooter;
