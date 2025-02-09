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
} from '@wordpress/block-editor';

import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
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
	const { text } = attributes;

	return (
		<>
			<BlockControls group="inline">
				<p>Inline Controls</p>
			</BlockControls>

			<BlockControls group="block">
				<p>Block Controls</p>
			</BlockControls>

			{ text && (
				<BlockControls
					group="other"
					controls={ [
						{
							title: 'Button 1',
							icon: 'admin-generic',
							isActive: true,
							onClick: () => console.log( 'Button 1 Clicked' ),
						},
						{
							title: 'Button 2',
							icon: 'admin-collapse',
							onClick: () => console.log( 'Button 2 Clicked' ),
						},
					] }
				>
					<ToolbarGroup>
						<ToolbarButton
							title="Align Left"
							icon="editor-alignleft"
							onClick={ () => console.log( 'Align Left' ) }
						/>
						<ToolbarButton
							title="Align Center"
							icon="editor-aligncenter"
							onClick={ () => console.log( 'Align Center' ) }
						/>
						<ToolbarButton
							title="Align Right"
							icon="editor-alignright"
							onClick={ () => console.log( 'Align Right' ) }
						/>
						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label={ __( 'More Alignments', 'text-block' ) }
							controls={ [
								{
									title: __( 'Wide', 'text-block' ),
									icon: 'align-wide',
								},
								{
									title: __( 'Full', 'text-block' ),
									icon: 'align-full-width',
								},
							] }
						/>
					</ToolbarGroup>
				</BlockControls>
			) }
			<RichText
				{ ...useBlockProps() }
				placeholder={ __( 'Add some text', 'text-block' ) }
				tagName="h4"
				allowedFormats={ [] }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				value={ text }
			/>
		</>
	);
}
