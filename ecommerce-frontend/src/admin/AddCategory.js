import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const AddCategory = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    const handleChange = e => {
        setError("");
        setName(e.target.value);
    };

    const clickSubmit = e => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        // make request to api to create category
    };

    const newCategoryFom = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                />
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
        </form>
    );

    return (
        <Layout
            title="Add a new category"
            description={`G'day ${name}, ready to add a new category?`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">{newCategoryFom()}</div>
            </div>
        </Layout>
    );
};

export default AddCategory;
