import PropTypes from "prop-types";

const Card = ({ title, showSub, children }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-col md:flex-row md:max-w-xl rounded-lg bg-yellow-600 shadow-lg`}
      >
          <div className="p-6 flex flex-col border justify-center">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          {showSub && (
            <p className="text-gray-500 text-sm mt-2">This is the card subtitle</p>
          )}
          <p className="text-gray-700 text-base mt-4 mb-4">{children}</p>

          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md"
          >
            Some action
          </button>
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          {showSub && (
            <p className="text-gray-500 text-sm mt-2">This is the card subtitle</p>
          )}
          <p className="text-gray-700 text-base mt-4 mb-4">{children}</p>

          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md"
          >
            Some action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  showSub: PropTypes.bool,
  imgUrl: PropTypes.string,
  background: PropTypes.string,
};