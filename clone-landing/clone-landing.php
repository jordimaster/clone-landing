<?php
/**
 * Plugin Name:       Clone Landing Page
 * Description:       Plugin that allows to clone the landing page of Online TEFL certification: https://www.teachaway.com/courses/online-tefl-certification
 * Version:           1.0
 * Author:            Jordi Farre
 * Author URI:        https://github.com/jordimaster
 * License:           GPL v2
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */



//Add landing template to template list
function cl_add_template_landing ($templates) {
	$templates['template-tefl-landing.php'] = 'TEFL Landing Page';
	return $templates;
}
add_filter ('theme_page_templates', 'cl_add_template_landing');


//Load landing template 
function cl_load_template_landing ( $template ) {
	$template = plugin_dir_path( __FILE__ ) . 'template-tefl-landing.php';
	return $template;
}
add_filter ('page_template', 'cl_load_template_landing');


//Set plugin location globally
if ( !defined( 'CLONE_LANDING_PATH' ) ) {
	define( 'CLONE_LANDING_PATH', plugin_dir_url( __FILE__ ) );
}