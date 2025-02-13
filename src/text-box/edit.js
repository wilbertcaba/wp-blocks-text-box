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
} from '@wordpress/block-editor';

import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	AnglePickerControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';

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
	const { text, alignment } = attributes;

	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Color Settings', 'text-block' ) }
					icon="admin-appearance"
					initialOpen
				>
					<TextControl
						label="Input Label"
						value={ text }
						onChange={ onChangeText }
						help="Helpful text"
					/>
					<TextareaControl
						label="Textarea Label"
						value={ text }
						onChange={ onChangeText }
						help="Helpful text"
					/>
					<ToggleControl
						label="Toggle Label"
						checked={ true }
						onChange={ ( value ) => console.log( value ) }
					/>
					<AnglePickerControl
						label="Angle Picker Label"
						value={ 90 }
						onChange={ ( value ) => console.log( value ) }
					/>
					<ColorPicker
						color="#f00"
						onChangeComplete={ ( value ) => console.log( value ) }
					/>
					<ColorPalette
						colors={ [
							{ color: '#f00' },
							{ color: '#0f0' },
							{ color: '#00f' },
						] }
						onChange={ ( value ) => console.log( value ) }
					/>
				</PanelBody>
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
