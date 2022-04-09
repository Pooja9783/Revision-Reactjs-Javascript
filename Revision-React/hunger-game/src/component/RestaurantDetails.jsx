import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import database from "../db/db.json";
import Navbar from "./Navbar";
import "../App.css";
const Restaurantdetails = () => {
  let storedata = database.data;
  //   console.log(storedata);
  const [value, setValue] = useState(storedata);

  //~~~~~~~~~~~~~~~~~~Pagination Start~~~~~~~~~~~~~~~~~~~~~~~
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(value.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  //~~~~~~~~~~~~~~~~~~Pagination End~~~~~~~~~~~~~~~~~~~~~~~

  //   console.log(value.data);

  // ~~~~~~~~~~~~~~~Rating~~~~~~~~~
  const highToLow = (a) => {
    if (a === "a") {
      let res = value.filter((e) => {
        return e.ratingStar >= 1;
      });
      setValue(res);
    } else if (a === "b") {
      let res = value.filter((e) => {
        return e.ratingStar >= 2;
      });
      setValue(res);
    } else if (a === "c") {
      let res = value.filter((e) => {
        return e.ratingStar >= 3;
      });
      setValue(res);
    } else if (a === "d") {
      let res = value.filter((e) => {
        return e.ratingStar >= 4;
      });
      setValue(res);
    }
  };

  //~~~~~~~~~~~~~~~~~~Payment~~~~~~~~~~~~~~~~
  const payment_methods = (m) => {
    if (m === "x") {
      let res = value.filter((e) => {
        return e.payment_methods === "cash";
      });
      setValue(res);
    } else if (m === "y") {
      let res = value.filter((e) => {
        return e.payment_methods === "card";
      });
      setValue(res);
    } else if (m === "z") {
      let res = value.filter((e) => {
        return e.payment_methods === "upi";
      });
      setValue(res);
    }
  };
  //~~~~~~~~~~~~~~~~~~Payment~~~~~~~~~~~~~~~~

  //~~~~~~~~~~~~~~~~~~High to Low~~~~~~~~~~~~~~~~
  const hTol = (m) => {
    if (m === "h") {
      let res = value.sort((a, b) => {
        return b.costForOne - a.costForOne;
      });
      setValue([...res]);
    } else if (m === "l") {
      let res = value.sort((a, b) => {
        return a.costForOne - b.costForOne;
      });
      setValue([...res]);
    }
  };
  //~~~~~~~~~~~~~~~~~~High to Low~~~~~~~~~~~~~~~~

  return (
    <div>
      <Navbar
        highToLow={highToLow}
        payment_methods={payment_methods}
        hTol={hTol}
      />
      <div className="container">
        <div className="row">
          {value
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
