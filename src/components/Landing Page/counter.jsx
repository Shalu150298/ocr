import React from "react";
import "./assets/css/style.css"
const Counter = () => {
  return (
    <div>
      <section id="counts" class="counts section">
        <div class="container">
          <div class="section-title p-0">
            <h2>We Are Offering 14 Days Free Trial</h2>
            <p className="text-white">
              Our purpose is to deliver excellence in service and execution. Our
              purpose is to deliver excellence in service. Our purpose is to
              deliver excellence in service.
            </p>
            <button
              type="submit"
              className="btn btn-outline-light d-inline-flex flex-row align-items-center mt-4"
            >
              Free Trial
              <em className="ml-2" data-feather="arrow-right"></em>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
