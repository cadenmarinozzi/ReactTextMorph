import PropTypes from "prop-types";
import "./ReactTextMorph.scss";

function ReactTextMorph({
	text,
	morphText,
	morphTextColor,
	morphState = false,
	...rest
}) {
	return (
		<div
			className="morph-container"
			{...rest}
			style={{
				"--morph-text-color": morphTextColor,
			}}>
			<svg id="filters">
				<defs>
					<filter id="threshold">
						<feColorMatrix
							in="SourceGraphic"
							type="matrix"
							values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 255 -140"
						/>
					</filter>
				</defs>
			</svg>
			<h1 className={`text ${morphState && "text-morphing"}`}>{text}</h1>
			<h1 className={`morph-text ${morphState && "morph-text-morphing"}`}>
				{morphText}
			</h1>
		</div>
	);
}

ReactTextMorph.propTypes = {
	text: PropTypes.string.isRequired,
	morphText: PropTypes.string.isRequired,
	morphTextColor: PropTypes.string,
	morphState: PropTypes.bool,
};

ReactTextMorph.defaultProps = {
	morphState: false,
	morphTextColor: "white",
};

export default ReactTextMorph;
