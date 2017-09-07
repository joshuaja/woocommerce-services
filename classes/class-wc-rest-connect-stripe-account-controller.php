<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( class_exists( 'WC_REST_Connect_Stripe_Account_Controller' ) ) {
	return;
}

class WC_REST_Connect_Stripe_Account_Controller extends WC_REST_Connect_Base_Controller {
	protected $rest_base = 'connect/stripe/account';
	private $stripe;

	public function __construct( WC_Connect_Stripe $stripe, WC_Connect_API_Client $api_client, WC_Connect_Service_Settings_Store $settings_store, WC_Connect_Logger $logger ) {
		parent::__construct( $api_client, $settings_store, $logger );
		$this->stripe = $stripe;
	}

	public function post( $request ) {
		$data = $request->get_json_params();

		$response = $this->stripe->create_account( $data['email'], $data['country'] );

		if ( is_wp_error( $response ) ) {
			$this->logger->debug( $response, __CLASS__ );
			return new WP_REST_Response( array(
				'success'   => false,
				'data'      => array(
					'message' => $response->get_error_message(),
				),
			), 400 );
		}

		return new WP_REST_Response( array(
			'success'         => true,
			'account_id'      => $response->accountId,
		), 200 );
	}
}
