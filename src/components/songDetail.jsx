import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  console.log(selectedSong);
  return <div>Song Detail</div>;
};

const mapStateToProps = ({ selectedSong }) => {
  return { selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
