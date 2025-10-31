import React from "react";
import { Table } from "react-bootstrap";

function ResultsTable({ results }) {
  return (
    <section className="results-container">
      <h3 className="text-light mb-3">Hasil Pencarian</h3>

      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Artis</th>
            <th>Judul Lagu</th>
            <th>Album</th>
            <th>Harga</th>
            <th>Tanggal Rilis</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key={item.trackId || index}>
              <td>{index + 1}</td>
              <td>{item.artistName}</td>
              <td>{item.trackName}</td>
              <td>{item.collectionName}</td>
              <td>{item.collectionPrice ? `$${item.collectionPrice}` : "-"}</td>
              <td>{item.releaseDate ? new Date(item.releaseDate).toLocaleDateString() : "-"}</td>
              <td>
                {item.previewUrl ? (
                  <audio controls style={{ width: "100px" }}>
                    <source src={item.previewUrl} type="audio/mp4" />
                  </audio>
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default ResultsTable;
