import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
    const handleSortChange = (event, newValue) => {
        console.log(newValue);
        if (onChange) onChange(newValue);
    };
    return (
        <Tabs
            value={currentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Giá thấp xuống cao" value="salePrice:ASC" />
            <Tab label="Giá cao xuống thấp" value="salePrice:DESC" />
        </Tabs>
    );
}

export default ProductSort;
