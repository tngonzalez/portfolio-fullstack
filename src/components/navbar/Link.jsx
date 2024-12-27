import PropTypes from "prop-types";

const Link = ({ page, label }) => {
  return (
    <a
      href={`#${page}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {label}
    </a>
  );
};

Link.propTypes = {
  page: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Link;
