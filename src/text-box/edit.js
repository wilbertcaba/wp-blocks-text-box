/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit( { attributes, setAttributes } ) {
	const { text, alignment, backgroundColor, textColor } = attributes;

	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};

	const onBackgroundColorChange = ( newColor ) => {
		setAttributes( { backgroundColor: newColor } );
	};

	const onTextColorChange = ( newColor ) => {
		setAttributes( { textColor: newColor } );
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color Settings', 'text-block' ) }
					icon="admin-appearance"
					initialOpen
					disableCustomColors={ false }
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: onBackgroundColorChange,
							label: __( 'Background Color', 'text-block' ),
						},
						{
							value: textColor,
							onChange: onTextColorChange,
							label: __( 'Text Color', 'text-block' ),
						},
					] }
				>
					<ContrastChecker
						textColor={ textColor }
						backgroundColor={ backgroundColor }
					/>
				</PanelColorSettings>
			</InspectorControls>
			<BlockControls group="block">
				<AlignmentToolbar
					onChange={ onChangeAlignment }
					value={ alignment }
				/>
			</BlockControls>

			<RichText
				{ ...useBlockProps( {
					className: `text-box-align-${ alignment }`,
					style: {
						backgroundColor,
						color: textColor,
					},
				} ) }
				placeholder={ __( 'Add some text', 'text-block' ) }
				tagName="h4"
				allowedFormats={ [] }
				onChange={ onChangeText }
				value={ text }
			/>
		</>
	);
}
