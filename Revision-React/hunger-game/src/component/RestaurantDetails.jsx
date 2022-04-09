import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import database from "../db/db.json";
import Navbar from "./Navbar";
import "../App.css";
const Restaurantdetails = () => {
  const [value, setValue] = useState(database);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(value.data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {value.data
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((d, i) => {
              return (
                <div className="col-4 " key={i}>
                  <img
                    className="card-img-top"
                    style={{ width: "25rem", height: "20rem" }}
                    src={d.img}
                    alt="img"
                  />
                  <h3>{d.title}</h3>
                  <h4>{d.category}</h4>
                  <h5>Rs.{d.costForOne}</h5>
                  <h6>Price upto : Rs.{d.minRate}</h6>
                  <p>Reviews :{d.review}</p>
                  <p>Vote :{d.vote}</p>
                  <p>Rating : {d.ratingStar}</p>
                  <p>Payment Mode : {d.payment_methods}</p>
                </div>
              );
            })}
        </div>
        <hr />
        <div className="page">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
};

export default Restaurantdetails;
