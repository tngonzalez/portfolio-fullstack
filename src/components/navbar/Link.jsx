import PropTypes from "prop-types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, label }) => {
  return (
    <AnchorLink
      href={`#${page}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        margin: "0 1rem",
        cursor: "pointer",
      }}
    >
      {label}
    </AnchorLink>
  );
};

Link.propTypes = {
  page: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Link;
