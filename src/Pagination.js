import React from 'react'
import './Pagination.css';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    // Burada 'pagination' sınıfını ekleyin
    <div className="pagination">
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
