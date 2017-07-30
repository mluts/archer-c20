var CMM_ERROR				= 1;
var CMM_RSL_CONFLICT_KEY	= 1001;

// 4500-4599 updata Firmware/Config
var CMM_CFG_FILE_TOO_LONG = 4500;
var CMM_CFG_FILE_FORMAT_ERR = 4501;
var CMM_UPDATE_FILE_LEN_ERR = 4502;
var CMM_UPDATE_FILE_VER_ERR = 4503;
var CMM_GET_SIGN_ERR = 4504;
var CMM_RESTORE_DEFAULT_CFG_ERR = 4505;
var CMM_UPDATE_ADDI_HW_VER_ERR = 4506;

// 4600-4620	sys user
// 4621-4640	management control
// 4641-4660	httpd config
// 4700-4799	Firewall
var CMM_FW_ILLEGAL_IP					= 4700;	
var CMM_FW_NOT_LAN_IP					= 4701;	
var CMM_FW_LAN_IP						= 4702;	
var CMM_FW_ILLEGAL_PORT					= 4703;	
var CMM_FW_ILLEGAL_MAC					= 4704;	
var CMM_FW_EMPTY_INTERNAL_HOST			= 4705;	
var CMM_FW_EMPTY_EXTERNAL_HOST			= 4706;	
var CMM_FW_EMPTY_TASK_SCHEDULE			= 4707;	
var CMM_FW_EMPTY_RULE					= 4708;	
var CMM_FW_ILLEGAL_RULE					= 4709;	
var CMM_FW_CONFLICT_INTERNAL_HOST		= 4710;	
var CMM_FW_CONFLICT_EXTERNAL_HOST		= 4711;	
var CMM_FW_CONFLICT_TASK_SCHEDULE		= 4712;	
var CMM_FW_CONFLICT_RULE				= 4713;	
var CMM_FW_EMPTY_URL					= 4714;	
var CMM_FW_REACH_MAX_URL				= 4715;	
var CMM_FW_REQ_DENY						= 4716;	
var CMM_FW_SET_TIMER_ERROR				= 4717;	
var CMM_FW_MALLOC_RULE_FAILED			= 4718;	
var CMM_FW_SET_DEFAULT_ACTION_FAILED	= 4719;	
var CMM_FW_SET_URL_FAILED				= 4720;	
var CMM_PC_INHOST_IS_NOT_MAC			= 4721;													
var CMM_PC_EXHOST_IS_NOT_URL			= 4722;													
var CMM_PC_MAC_IS_SAME_WITH_PARENT_MAC	= 4723;	
var CMM_FW_NAME_INCLUDE_INVALID_CHAR	= 4724;	
var CMM_FW_NAME_END_WITH_SPACE			= 4725;	
var CMM_FW_INVILID_URL					= 4726;	
var CMM_PC_MAC_IS_SAME_WITH_CHILD_MAC	= 4727;	
	
// 4800-4899	QoS & TC
var CMM_TC_DOWN_BANDWIDTH				= 4800;
var CMM_TC_UP_BANDWIDTH					= 4801;
var CMM_TC_CONFLICT						= 4802;
var CMM_TC_START_IP_ERROR				= 4803;
var CMM_TC_END_IP_ERROR					= 4804;            
var CMM_TC_DOWN_TOTAL_BW				= 4805;
var CMM_TC_UP_TOTAL_BW					= 4806;
var CMM_TC_UP_TOTAL_BW_VOIP				= 4807;
var CMM_TC_VOIP_BW_ZERO					= 4808;
var CMM_TC_MAX_ERROR					= 4849;
var CMM_QOS_EMPTY_QUEUE         		= 4850;
var CMM_QOS_WRR_TOTALBW_ZERO    		= 4851;
var CMM_QOS_MAX_PRIO            		= 4852;
var CMM_QOS_SAME_QUEUE_NAME     		= 4853;
var CMM_QOS_SAME_QUEUE_PRIO     		= 4854;
var CMM_QOS_MAX_QUEUE_WEIGHT    		= 4855;
var CMM_QOS_SCH_NOT_SUPPORTED   		= 4856;
var CMM_QOS_SAME_APP_NAME       		= 4857;
var CMM_QOS_NONEXIST_APP_INTF   		= 4858;
var CMM_QOS_NOT_WAN_APP_INTF    		= 4859;
var CMM_QOS_NONEXIST_APP_QUEUE  		= 4860;
var CMM_QOS_NONEXIST_CLS_INTF   		= 4861;
var CMM_QOS_NONEXIST_CLS_QUEUE  		= 4862;
var CMM_QOS_EMPTY_CLS_INGRESS_INTF 		= 4863;
var CMM_QOS_SAME_CLS_NAME       		= 4864;
var CMM_QOS_SAME_CLS_CRITERION  		= 4865;
var CMM_QOS_CLS_SRC_IP_NON_LAN  		= 4866;
var CMM_QOS_CLS_DEST_IP_LAN     		= 4867;
var CMM_QOS_CLS_SRC_IP_LAN      		= 4868;
var CMM_QOS_CLS_DEST_IP_NON_LAN 		= 4869;
var CMM_QOS_INTF_INVALID        		= 4870;

// 4900-4999	Forward
// 4900-4929	DMZ 
var CMM_DMZ_IP_NOT_IN_LAN_SUBNET	= 4903; 
// 4930-4969	VS 
var CMM_VS_INVALID_LOCAL_IP_PARAM	= 4930;
var CMM_VS_PROTO_TYPE_ERR			= 4931;
var CMM_VS_ADD_NEW_INTERNAL_ERR 	= 4932;
var CMM_VS_DEL_OLD_INTERNAL_ERR 	= 4933;
var CMM_VS_RECORD_ALREADY_FULL		= 4934;
var CMM_VS_RECORD_ALREADY_EXIST 	= 4935;
var CMM_VS_PORT_OUT_RANGE			= 4936;
var CMM_VS_IP_NOT_IN_LAN_SUBNET 	= 4937;
var CMM_VS_CONFLICT_REMOTE_WEB_PORT = 4938;
// 4970-4999	PT 
var CMM_PT_RECORD_ALREADY_FULL 		= 4970;
var CMM_PT_OPEN_PROTO_TYPE_ERR		= 4971;
var CMM_PT_TRIG_PROTO_TYPE_ERR		= 4972;
var CMM_PT_TRIG_PORT_CONFLICT		= 4973;
var CMM_PT_TRIG_PORT_OUT_RANGE		= 4974;
var CMM_PT_OPEN_PORT_OUT_RANGE		= 4975;
var CMM_PT_ADD_NEW_INTERNAL_ERR		= 4976;
var CMM_PT_DEL_OLD_INTERNAL_ERR		= 4977;
var CMM_PT_RECORD_ALREADY_EXIST		= 4978;

// 5000-5099	DHCP server
var CMM_LAN_IP_ERR 													= 5000;
var CMM_LAN_MASK_ERR 												= 5001;
var CMM_LAN_IP_MASK_DISMATCH 										= 5002;
var CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_WAN 							= 5003;
var CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_OTHER_LAN 					= 5004;
var CMM_LAN_UNEXPECT_EXISTING_LAN_IP_AND_MASK						= 5005;
	
var CMM_DHCPS_SRV_MIN_ADDR_ERR 										= 5010;
var CMM_DHCPS_SRV_MAX_ADDR_ERR 										= 5011;
var CMM_DHCPS_SRV_GATEWAY_ADDR_ERR									= 5012;
var CMM_DHCPS_SRV_DNS1_ADDR_ERR 									= 5013;
var CMM_DHCPS_SRV_DNS2_ADDR_ERR 									= 5014;
var CMM_DHCPS_SRV_RELAY_SRV_ADDR_ERR 								= 5015;
var CMM_DHCPS_SRV_RELAY_SRV_ADDR_EMPTY 								= 5016;
var CMM_DHCPS_SRV_MIN_ADDR_NOT_IN_THE_SAME_SUBNET 					= 5017;
var CMM_DHCPS_SRV_MAX_ADDR_NOT_IN_THE_SAME_SUBNET 					= 5018;
var CMM_DHCPS_SRV_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET 				= 5019;
	
var CMM_DHCPS_FIX_MAP_MAC_ADDR_ERR 									= 5020;
var CMM_DHCPS_FIX_MAP_IP_ADDR_ERR 									= 5021;
var CMM_DHCPS_FIX_MAP_IP_NOT_IN_THE_SAME_SUBNET 					= 5022;
var CMM_DHCPS_FIX_MAP_MAC_CONFLICT 									= 5023;
var CMM_DHCPS_FIX_MAP_IP_CONFLICT 									= 5024;

var CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_EMPTY 					= 5030;
var CMM_DHCPS_CONDITIONAL_POOL_VID_EMPTY 							= 5031;
var CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_ERR 						= 5032;
var CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_ERR 						= 5033;
var CMM_DHCPS_CONDITIONAL_POOL_IPRouters_ADDR_ERR 					= 5034;
var CMM_DHCPS_CONDITIONAL_POOL_DNS1_ADDR_ERR 						= 5035;
var CMM_DHCPS_CONDITIONAL_POOL_DNS2_ADDR_ERR 						= 5036;
var CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_NOT_IN_THE_SAME_SUBNET 		= 5038;
var CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_NOT_IN_THE_SAME_SUBNET 		= 5039;
var CMM_DHCPS_CONDITIONAL_POOL_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET 	= 5040;
var CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_CONPLICT 				= 5041;
var CMM_DHCPS_CONDITIONAL_POOL_VID_CONPLICT 						= 5042;
var CMM_DHCPS_CONDITIONAL_POOL_POOLS_CONPLICT						= 5043;
var CMM_DHCPS_CONDITIONAL_POOL_OPTION_CODE_INVALID 					= 5044;
var CMM_DHCPS_CONDITIONAL_POOL_OPTION_VALUE_EMTPY 					= 5045;
var CMM_DHCPS_CONDITIONAL_POOL_VID_ERR								= 5046;

// 5100-5199	router
var	CMM_DEFAULT_ROUTE_NAME_ERR 			= 5100;
var	CMM_STATIC_ROUTE_DEST_IP_ERR		= 5101;
var	CMM_STATIC_ROUTE_DEST_SUB_ERR 		= 5102;
var	CMM_STATIC_ROUTE_GATEWAY_ERR 		= 5103;
var	CMM_STATIC_ROUTE_SUB_DISMATCH_IP 	= 5104;
var	CMM_STATIC_ROUTE_DEST_CONFLICT_LAN 	= 5105;
var	CMM_STATIC_ROUTE_DEST_CONFLICT_WAN 	= 5106;
var	CMM_STATIC_ROUTE_ENTRY_CONFLICT 	= 5107;
var	CMM_STATIC_ROUTE_NOT_SAME_NET 		= 5108;
var	CMM_STATIC_ROUTE_NAME_ERR			= 5109;
var CMM_STATIC_ROUTE_CONN_ERR			= 5110;
var CMM_STATIC_ROUTE_NEED_IF			= 5111;

// 5200-5299	DNS & DDNS
var CMM_DNS_DEFAULT_NAME_ERR 	= 5200;
var CMM_DNS_SET_ERR 			= 5201;
var CMM_DDNS_PH_START_ERROR 	= 5210;
var CMM_DDNS_PH_CFG_MSG_ERROR = 5211;
var CMM_DDNS_PH_RT_MSG_ERROR 	= 5212;
var CMM_DDNS_PH_STATE_GET_ERROR = 5213;
var CMM_DDNS_PH_USR_ERROR = 5214;
var CMM_DDNS_PH_PWD_ERROR = 5215;
var CMM_DDNS_PH_NO_RUN = 5216;
var CMM_DYNDNS_USERNAME_ERROR = 5217;
var CMM_DYNDNS_PASSWORD_ERROR = 5218;
var CMM_DYNDNS_USERDOMAIN_ERROR = 5219;
var CMM_DYNDNS_SERVER_ERROR = 5220;
var CMM_NOIPDNS_USERNAME_ERROR = 5221;
var CMM_NOIPDNS_PASSWORD_ERROR = 5222;
var CMM_NOIPDNS_USERDOMAIN_ERROR = 5223;
var CMM_NOIPDNS_SERVER_ERROR = 5224;
var CMM_CMXDNS_USERNAME_ERROR = 5225;
var CMM_CMXDNS_PASSWORD_ERROR = 5226;
var CMM_CMXDNS_USERDOMAIN_ERROR = 5227;
var CMM_CMXDNS_SERVER_ERROR = 5228;
// 5300-5349	SNTP
var	CMM_SNTP_SET_ERR 		= 5300;
var	CMM_SNTP_YEAR_ERR 		= 5303;
var	CMM_SNTP_MONTH_ERR 		= 5304;
var	CMM_SNTP_DAY_ERR 		= 5305;
var	CMM_SNTP_HOUR_ERR 		= 5306;
var	CMM_SNTP_MONUTES_ERR 	= 5307;
var	CMM_SNTP_SECONDS_ERR 	= 5308;

var	CMM_DST_START_INVALID = 5310;	
var	CMM_DST_END_INVALID = 5311;		
var	CMM_DST_CFG_INVALID = 5312;		

// 5350-5399	CLI

// 5400-5499	IP&ARP
var CMM_ARP_BIND_ENTRY_OVERFLOW = 5400;
var CMM_ARP_BIND_ENTRY_CONFLICT_WHEN_EDIT = 5401;
var CMM_ARP_BIND_ENTRY_CONFLICT_WHEN_IMPORT = 5402;
var CMM_ARP_BIND_ENTRY_IP_ADDR_ERR = 5403;
var CMM_ARP_BIND_ENTRY_MAC_ADDR_ERR = 5404;
var CMM_ARP_BIND_ENTRY_STATE_ERR = 5405;
var CMM_ARP_BIND_ENTRY_IP_NOT_IN_LAN_SUBNET = 5406;
var CMM_ARP_BIND_ADD_SYS_ENTRY_FAILED = 5407;
var CMM_ARP_BIND_DEL_SYS_ENTRY_FAILED = 5408;
var CMM_ARP_BIND_SET_SYS_ENTRY_FAILED = 5409;
var CMM_ARP_BIND_PARAM_FORMAT_ERR = 5410;

// 5500-5519	AutoPVC

// 5520-5549	IPTV
var CMM_IPTV_INVALIED_VCI 			= 5520;
var CMM_IPTV_INVALIED_VPI 			= 5521;
var CMM_IPTV_INVALIED_LANPORT		= 5522;
var CMM_IPTV_BR_NOTIN_GROUP			= 5523;
var CMM_IPTV_LAN_NOTIN_GROUP		= 5524;	
var CMM_IPTV_LANPORT_ALREADY_USED	= 5525;
var CMM_IPTV_ETHWAN_NOT_ENABLE        = 5526;
var CMM_IPTV_LANPORT_EMPTY           = 5527;
var CMM_IPTV_IP_IN_SAME_SUBNET_WITH_WAN  = 5528;

// 5550-5569	ETH WAN
var CMM_ETHWAN_INTF_NOTIN_DFTGROUP	= 5550;
var CMM_ETHWAN_INTF_NAME_IS_NULL	= 5551;
var CMM_ETHWAN_VIR_PORTS_IS_NOT_EN	= 5552;
var CMM_ETHWAN_LANPORT_ALREADY_USED = 5554;

var CMM_ETHWAN_INTF_NOT_EXIST		= 5555;

var CMM_WAN_DSL_SCR_INVAD                       = 5570;
var CMM_WAN_DSL_PCR_INVAD                       = 5571;
var CMM_WAN_DSL_SCR_LARGER_THAN_PCR             = 5572;
var CMM_WAN_DSL_MBS_INVAD						= 5573;
var CMM_WAN_DSL_CFG_HAS_NO_INTF					= 5574;
var CMM_WAN_DSL_ERR_LINKTYPE					= 5575;

// 5650-5699	WAN common error
var CMM_WAN_INVALID_AC_TYPE						= 5650;
var CMM_WAN_LINK_CFG_IFNAME_NULL				= 5651;
var CMM_WAN_NO_LINK_CFG_OBJ						= 5652;
var CMM_WAN_UNKNOWN_CONN_TYPE					= 5653;
var CMM_WAN_CAL_FAKE_MAC_FAILED					= 5654;

// 5700-5799 Static IP & Dynamic IP
var CMM_WAN_IP_BOOL_FORMAT_ERROR				= 5700;
var CMM_WAN_IP_PARAM_NOT_VALID_VALUE			= 5701;
var CMM_WAN_IP_INVALID_IP_ADDR_FORMAT			= 5702;
var CMM_WAN_IP_IFNAME_ERROR					    = 5703;
var CMM_WAN_IP_MAC_ADDR_ERROR                   = 5704;
var CMM_WAN_IP_CLONE_MAC_ADDR_ERROR             = 5705;
var CMM_WAN_IP_MAC_OVERRIDE_ERROR				= 5706;
var CMM_WAN_IP_MAC_CLONE_ERROR					= 5707;
var CMM_WAN_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN   = 5708;
var CMM_WAN_IP_DNS_ADDR_ERROR                   = 5709;
var CMM_WAN_IP_IP_ADDR_ERROR                    = 5710;
var CMM_WAN_IP_GATEWAY_ADDR_ERROR               = 5711;
var CMM_STATIC_IP_INTF_ERR						= 5712;
var CMM_IPOA_NONE_SINGLE_PVC_MULTI_CONN			= 5713;

var CMM_WAN_IPOA_INTF_ERROR						= 5717;

// 5800-5849 L2TP
var CMM_WAN_L2TP_BOOL_FORMAT_ERROR					= 5800;
var CMM_WAN_L2TP_PARAM_NOT_VALID_VALUE				= 5801;
var CMM_WAN_L2TP_IP_INVALID_IP_ADDR_FORMAT			= 5802;
var CMM_WAN_L2TP_PPP_INVALID_IP_ADDR_FORMAT			= 5803;
var CMM_WAN_L2TP_IFNAMEIP_ERROR						= 5804;
var CMM_WAN_L2TP_L2IFNAME_ERROR						= 5805;
var CMM_WAN_L2TP_MAC_ADDR_ERROR                 	= 5806;
var CMM_WAN_L2TP_CLONE_MAC_ADDR_ERROR           	= 5807;
var CMM_WAN_L2TP_MAC_OVERRIDE_ERROR					= 5808;
var CMM_WAN_L2TP_MAC_CLONE_ERROR					= 5809;
var CMM_WAN_L2TP_IP_DNS_ADDR_ERROR                  = 5810;
var CMM_WAN_L2TP_IP_IP_ADDR_ERROR                   = 5811;
var CMM_WAN_L2TP_PPP_IP_ADDR_ERROR					= 5812;
var CMM_WAN_L2TP_IP_GATEWAY_ADDR_ERROR              = 5813;
var CMM_WAN_L2TP_PPP_GATEWAY_ADDR_ERROR				= 5814;
var CMM_WAN_L2TP_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN  = 5815;
var CMM_WAN_L2TP_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN = 5816;
	
// 5850-5899 PPTP	
var CMM_WAN_PPTP_BOOL_FORMAT_ERROR					= 5850;
var CMM_WAN_PPTP_PARAM_NOT_VALID_VALUE				= 5851;
var CMM_WAN_PPTP_IP_INVALID_IP_ADDR_FORMAT			= 5852;
var CMM_WAN_PPTP_PPP_INVALID_IP_ADDR_FORMAT			= 5853;
var CMM_WAN_PPTP_IFNAMEIP_ERROR						= 5854;
var CMM_WAN_PPTP_L2IFNAME_ERROR						= 5855;
var CMM_WAN_PPTP_MAC_ADDR_ERROR                 	= 5856;
var CMM_WAN_PPTP_CLONE_MAC_ADDR_ERROR           	= 5857;
var CMM_WAN_PPTP_MAC_OVERRIDE_ERROR					= 5858;
var CMM_WAN_PPTP_MAC_CLONE_ERROR					= 5859;
var CMM_WAN_PPTP_IP_DNS_ADDR_ERROR                  = 5860;
var CMM_WAN_PPTP_IP_IP_ADDR_ERROR                   = 5861;
var CMM_WAN_PPTP_PPP_IP_ADDR_ERROR					= 5862;
var CMM_WAN_PPTP_IP_GATEWAY_ADDR_ERROR              = 5863;
var CMM_WAN_PPTP_PPP_GATEWAY_ADDR_ERROR				= 5864;
var CMM_WAN_PPTP_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN  = 5865;
var CMM_WAN_PPTP_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN = 5866;

//5900-5999
var CMM_PPP_BOOL_FORMAT_ERROR					= 5900;
var CMM_PPP_PARAM_NOT_VALID_VALUE				= 5901;
var CMM_INVALID_PPP_ADDR_FORMAT					= 5902;
var CMM_PPP_INTF_ERROR							= 5903;
var CMM_PPP_MAC_OVERRIDE_ERROR					= 5904;
var CMM_PPP_MAC_CLONE_ERROR						= 5905;
var CMM_WAN_EXCEED_LIMITED_NUM					= 5906;
var CMM_WAN_NO_DSL_INTF_ERROR					= 5907;
var CMM_PPPOA_NONE_SINGLE_PVC_MULTI_CONN		= 5908;
var CMM_WAN_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN 	= 5909;
var CMM_WAN_INVALID_DNS							= 5910;
var CMM_WAN_NO_PPPOA_INTF					= 5911;
var CMM_WAN_PPPOA_ASSIGN_PVC_FAIL			= 5912;
var CMM_WAN_PPPOA_NO_DSL_CFG				= 5913;
var CMM_WAN_GENERATE_MAC_FAILED				= 5914;
var CMM_WAN_UNKOWN_PPP_CONN_TYPE			= 5915;
var CMM_PPP_NO_ETH_CFG_INTF					= 5916;

//6100-6199 USB
var CMM_USB_MORE_ALIVE_DEV						= 6100;
var CMM_USB_MORE_ALIVE_LOG						= 6101;
var CMM_USB_VOLUME_UMOUNT_FAIL					= 6102;
var CMM_USB_NOBODY_ERROR						= 6103;
var CMM_USB_ILLEGAL_FOLDER_PATH					= 6104;
var CMM_USB_3G_UNLOCK_PIN_CODE_FAIL				= 6110;
var CMM_USB_3G_FILE_TOO_LONG					= 6111;
var CMM_USB_3G_FILE_FORMAT_ERR					= 6112;
var CMM_USB_3G_TOO_MANY_ENTRIES					= 6113;
var CMM_USB_3G_UPLOAD_PARSE_FAILED				= 6114;
var CMM_USB_3G_ENTRY_ALREADY_EXIST				= 6115;
var CMM_USB_3G_MODEM_ENTRIES_FULL				= 6116;

// 6200-6299 IPv6
var CMM_ROUTE6_ADDR_VALID				= 6200;
var CMM_ROUTE6_DEFAULT_ROUTE_NAME_ERR	= 6201;
var CMM_ROUTE6_PREFIX_LEN_VALID			= 6210;
var CMM_ROUTE6_ENTRY_DUPLICATE			= 6211;
var CMM_ROUTE6_DEST_CONFLICT_LAN 		= 6212;
var CMM_ROUTE6_GW_PFX_NOT_SAME_WITH_WAN = 6213;
var CMM_ROUTE6_CONN_ERR					= 6214;	
	
var CMM_WAN6_CONN_TYPE_INVALID			= 6220;

var CMM_TUNNEL6_6RD_PREFIX_INVALID		= 6230;
	
//7000-7200 voip
var CMM_VOIP_FEATURE_CODE_LEN_ERROR		= 7003;
var CMM_VOIP_FEATURE_CODE_STRING_ERROR	= 7004;
var CMM_VOIP_FEATURE_CODE_CONFLICT_ERROR	= 7005;
var CMM_VOIP_PROFILE_NAME_CONFLICT_ERROR	= 7006;
var CMM_VOIP_PROFILE_CONFLICT_ERROR			= 7009;

// 7500-7999 WLAN
var CMM_WLAN_PARAM_CONFLICTE 				= 7500;	
var CMM_WLAN_INVALID_PARAM_VALUE			= 7501;	
var CMM_WLAN_SSID_CONFLICTE					= 7503;	
var CMM_WLAN_MACFILTER_ADDR_CONFLICT		= 7504;	
var CMM_WLAN_SSID_CONFLICTE_WITH_GUESTNET	= 7505;	
var CMM_WLAN_READ_DEFAULT_PIN_FAILED		= 7508;	

//7600 IPSEC
var CMM_TUNNEL_NAME_ALREADY_EXITS           = 7800;
var CMM_TUNNEL_LOCAL_IP_SHOULD_IN_LAN       = 7801;
var CMM_TUNNEL_REMOTE_IP_CONFLICT_LAN       = 7802;

// 9000 DM
var CMM_METHOD_NOT_SUPPORTED				= 9000;
var CMM_REQUEST_DENIED						= 9001;
var CMM_INTERNAL_ERROR						= 9002;
var CMM_INVALID_ARGUMENTS					= 9003;
var CMM_RESOURCE_EXCEEDED					= 9004;
var CMM_INVALID_PARAM_NAME					= 9005;
var CMM_INVALID_PARAM_TYPE					= 9006;
var CMM_INVALID_PARAM_VALUE 				= 9007;
var CMM_INVALID_CONFIG_FILE					= 9802;
var CMM_OBJECT_NOT_FOUND					= 9804;
var CMM_INSTANCE_NOT_FOUND					= 9805;
var CMM_OBJECT_BUF_EXCEEDED					= 9808;
var CMM_REACH_MAX_INSTANCE_NUM				= 9812;

// 71000-71999 errno from httpd
var ERR_HTTP_BASE = 71000;
var HTTP_ERR_FORMAT = 71011;
var ERR_HTTP_ERR_GET = 71012;
var ERR_HTTP_ERR_SET = 71013;
var ERR_HTTP_ERR_CGI_INVALID_FORMAT = 71014;
var ERR_HTTP_ERR_CGI_INVALID_OP = 71015;
var ERR_HTTP_ERR_CGI_INVALID_CGI = 71016;
var ERR_HTTP_ERR_CGI_INVALID_ANSI = 71017;
var ERR_HTTP_ERR_IO = 71111;
var ERR_HTTP_ERR_SOFT_UP = 71211;
var ERR_HTTP_ERR_CONF_UP = 71221;
var ERR_HTTP_ERR_USER_NAME_NOT_CORRECT = 71230;
var ERR_HTTP_ERR_USER_TYPE = 71231;
var ERR_HTTP_ERR_USER_CMM_ARG = 71232;
var ERR_HTTP_ERR_USER_PWD_NOT_CORRECT = 71233;
var ERR_HTTP_ERR_USER_WEB_ARG = 71234;
var ERR_HTTP_ERR_TOOL_GET_IPMAC = 71241;

//80000 - 80999 WEB basic error
var ERR_UNKOWN = 80000;
var ERR_EXIT = 80001;
var ERR_NONE_FILE = 80002;
var ERR_GET = 80011;
var ERR_SET = 80012;
var ERR_NUM_INVAD = 80101;
var ERR_NUM_OUTRANGE = 80102;
var ERR_STR_NOT_ASCII = 80201;
var ERR_IP_FORMAT = 80301;
var ERR_IP_BROADCAST = 80302;
var ERR_IP_SUBNETA_NET_0 = 80303;
var ERR_IP_LOOPBACK = 80304;
var ERR_IP_SUBNETC_HOST_255 = 80305;
var ERR_IP_MULTICAST = 80306;
var ERR_IP_PRESERVED = 80307;
var ERR_MASK_INVAD = 80308;
var ERR_IPMASK_SUBNET_INVAD = 80309;
var ERR_IPMASK_HOST_INVAD = 80310;
var ERR_IPGW_NOT_SAME_SUBNET = 80311;
var ERR_MAC_FORMAT = 80401;
var ERR_MAC_ZERO = 80402;
var ERR_MAC_BROADCAST = 80403;
var ERR_MAC_MULTICAST = 80404;

// 84400-84599 CWMP
var ERR_CWMP_URL_INVAD = 84400;
var ERR_CWMP_PATH_INVAD = 84401;
var ERR_CWMP_PORT_INVAD = 84402;

// 84500-84599 updata Firmware/Config
var ERR_CONF_FILE_NONE = 84500;
var ERR_FIRM_FILE_NONE = 84501;

// 84600-84619	sys user
var ERR_USER_OLD_PWD_EMPTY = 84600;
var ERR_USER_OLD_PWD_ASCII = 84601;
var ERR_USER_NAME_EMPTY = 84602;
var ERR_USER_NAME_ASCII = 84603;
var ERR_USER_PWD_EMPTY = 84604;
var ERR_USER_PWD_ASCII = 84605;
var ERR_USER_NAME_PWD_CONFLICT = 84606;
var ERR_USER_OLD_NAME_EMPTY = 84607;
var ERR_USER_OLD_NAME_ASCII = 84608;
var ERR_USER_NAME_HAS_SPACE = 84609;
var ERR_USER_PWD_HAS_SPACE = 84610;

// 84620-84639	management control
var ERR_APP_LOCAL_HOST = 84620;
var ERR_APP_REMOTE_HOST = 84621;
var ERR_APP_LOCAL_MAC = 84622;
var ERR_APP_REMOTE_IP = 84623;

// 84640-84659	httpd config
var ERR_HTTP_LOCAL_PORT = 84640;
var ERR_HTTPS_LOCAL_PORT = 84641;
var ERR_HTTP_HTTPS_LOCAL_CONFILICT = 84642;
var ERR_HTTP_REMOTE_PORT = 84643;
var ERR_HTTP_REMOTE_HTTPS_LOCAL_CONFILICT = 84644;
var ERR_HTTPS_REMOTE_PORT = 84645;
var ERR_HTTP_LOCAL_HTTPS_REMOTE_CONFILICT = 84646;
var ERR_HTTP_HTTPS_REMOTE_CONFILICT = 84647;

// 84661-84680	time
var ERR_TIME_YEAR_INVAD = 84661;
var ERR_TIME_MONTH_INVAD = 84662;
var ERR_TIME_DAY_INVAD = 84663;
var ERR_TIME_HOUR_INVAD = 84664;
var ERR_TIME_MINUTE_INVAD = 84665;
var ERR_TIME_SECOND_INVAD = 84666;
var ERR_TIME_NTP_SERVER = 84667;

// 84681 - 84699	diagnostic
var ERR_DIAG_PACKET_SIZE = 84681;
var ERR_DIAG_TIME_OUT	= 84682;
var ERR_DIAG_EWAN_OFF	= 84683;
var ERR_DIAG_PING_COUNT = 84684;
var ERR_DIAG_IP_ADDR = 84685;
var ERR_DIAG_TTL	= 84686;

// 84700-84799	FierWall
var ERR_FW_ENTRYNAME_INVAD = 84700;
var ERR_FW_URL_INVAD = 84701;
var ERR_FW_RULE_INVAD = 84702;
var ERR_FW_TIME_INVAD = 84703;
var ERR_FW_URL_NULL = 84704;

// 84800-84899	QoS & TC
var ERR_TC_IP_PORT_INVAD		= 84800;
var ERR_TC_NUM_INVAD			= 84801;
var ERR_PORT_NUM_INVAD			= 84802;
var ERR_PORT_ORDER_INVAD		= 84803;
var ERR_EMPTY_START_PORT		= 84804;
var ERR_TC_IP_ORDER_INVAD		= 84805;
var ERR_TC_BW_ORDER_INVAD		= 84806;
var ERR_TC_EMPTY_START_IP		= 84807;
var ERR_TC_BW_NULL			= 84808;
var ERR_QOS_TOTALBW_INVAD 		= 84850;
var ERR_QOS_TOTALBW_INVAD_SP 	= 84851;
var ERR_QOS_QUEUE_DIR 			= 84852;
var ERR_QOS_QUEUE_NAME 			= 84853;
var ERR_QOS_QUEUE_NAME_LENGTH 	= 84854;
var ERR_QOS_QUEUE_WEIGHT_NUM 	= 84855;
var ERR_QOS_QUEUE_SCH 			= 84856;
var ERR_QOS_CLS_NAME 			= 84857;
var ERR_QOS_CLS_NAME_LENGTH 	= 84858;
var ERR_QOS_CLS_INTF_INVAD 		= 84859;
var ERR_MAC_MASK_INVAD 			= 84860;
var ERR_QOS_EMPTY_QUEUE 		= 84861;
var ERR_QOS_APP_NAME 			= 84862;

// 84900-84999	Forward
var ERR_VS_PORT_INVAD = 84930;
var ERR_FW_ADD_FAILED = 84931;
var ERR_FTP_DATA_PORT_CONFLICT = 84932;
var ERR_VS_INTER_PORT_INVAD = 84933;

// 85000-85099 LAN & DHCPS
var ERR_LAN_IP_INVAD = 85000;
var ERR_LAN_MASK_INVAD = 85001;
var ERR_LAN_IPMASK_INVAD = 85002;
var ERR_DHCP_START_IP_INVAD = 85010;
var ERR_DHCP_END_IP_INVAD = 85011;
var ERR_DHCP_LEASE_INVAD = 85012;
var ERR_DHCP_GATEWAY_INVAD = 85013;
var ERR_DOMAIN_INVAD = 85014;
var ERR_DHCP_DNS1_INVAD = 85015;
var ERR_DHCP_DNS2_INVAD = 85016;
var ERR_DHCP_RMT_SRV_EMPTY = 85017;
var ERR_DHCP_RMT_SRV_INVAD = 85018;
var ERR_LAN_SEC_IP_INVAD = 85019;
var ERR_DHCP_POOL_INVAD = 85020;
var ERR_DHCP_START_IP_INVAD_1 = 85021;
var ERR_DHCP_END_IP_INVAD_1 = 85022;

var ERR_DHCP_COND_POOL_DEV_NAME_EMPTY = 85040;
var ERR_DHCP_COND_POOL_VID_EMPTY = 85041;
var ERR_DHCP_COND_POOL_START_IP_INVAD = 85042;
var ERR_DHCP_COND_POOL_END_IP_INVAD = 85043;
var ERR_DHCP_COND_POOL_GW_INVAD = 85044;
var ERR_DHCP_COND_POOL_OPT_VAL_EMPTY = 85045;
var ERR_DHCP_COND_DNS1_INVAD = 85046;
var ERR_DHCP_COND_DNS2_INVAD = 85047;
var ERR_GATEWAY_INVAD = 85048;
var ERR_DHCP_COND_POOL_VID_INVAD = 85049;
var ERR_DHCP_COND_POOL_DEV_NAME_INVALID = 85050;

// 85100-85199 route

// 85200-85299 DNS&DDNS
var ERR_DDNS_USERNAME_EMPTY = 85200;
var ERR_DDNS_PWD_EMPTY = 85201;
var ERR_DDNS_DOMAIN_INVAD = 85202;
var ERR_DDNS_DOMAIN_EMPTY = 85203;

// 85300-85349 SNTP

// 85350-85399 CLI

// 85400-85499 ARP
var ERR_ARP_CONFLICT = 85401;
var ERR_SEL_INVAD = 85402;

// 85500-85519	AutoPVC
var ERR_AUTOPVC_VPI_INVAD = 85501;
var ERR_AUTOPVC_VCI_INVAD = 85502;
var ERR_AUTOPVC_EXSIST_INVAD = 85503;

// 85520-85549	IPTV
var ERR_IPTV_LANPORT_EMPTY = 85520;
// 85550-85569	ETH WAN
var ERR_TYPE_UNPLUGGED = 85550;
var ERR_TYPE_NOOPTION = 85551;

// 85590-85599 DSL
var ERR_DSL_MODULATION_MODE_NULL =85591; 

// 85600-85699	Bridge
var ERR_WAN_VPI_VCI_INVAD 	= 85601;
var ERR_WAN_PCR_INVAD 		= 85602;
var ERR_WAN_SCR_INVAD 		= 85603;
var ERR_WAN_MBS_INVAD 		= 85604;
var ERR_WAN_CONNECTIONTYPE_NULL  = 85605;
var ERR_WAN_CONNECTIONTYPE_INVAD = 85606;
var ERR_WAN_MTU_INVAD = 85607;
var ERR_WAN_DNSADDR_INVAD = 85608;
var ERR_WAN_SECDNS_INVAD = 85609;
var ERR_WAN_ECHOTIME_INVAD = 85610;
var ERR_WAN_USERNAME_INVAD = 85611;
var ERR_WAN_PWD_INVAD = 85612;
var ERR_WAN_PPPOE_MTU_INVAD = 85613;
var ERR_WAN_DEFGATEWAY_INVAD = 85614;
var ERR_AUTOPVC_INVAD = 85615;
var ERR_AUTOPVC_IP_FORMAT = 85616;
var ERR_GROUP_INVAD = 85617;
var ERR_INTERFACE_INVAD = 85618;
var ERR_GROUP_NAME_INVAD = 85619;
var ERR_PWD_INVAD = 85620;
var ERR_USERNAME_INVAD = 85621;
var ERR_WAN_SCR_EMPTY = 85622;
var ERR_WAN_PCR_EMPTY = 85623;
var ERR_WAN_SCR_LARGER_THAN_PCR = 85624;
var ERR_WAN_INTER_GROUPNAME_INVALID = 85625;
var ERR_WAN_MBS_EMPTY = 85626;
var ERR_WAN_DA_SERVER_NAME_EMPTY = 85627;
var ERR_WAN_DA_DNS_EMPTY = 85628;
var ERR_AUTHSERVER_INVAD = 85629;
var ERR_AUTHDOMAIN_INVAD = 85630;
var ERR_WAN_L2TP_MTU_INVAD = 85631;
var ERR_WAN_PPTP_MTU_INVAD = 85632;
var ERR_WAN_BPA_AUTHSERVER_INVAD = 85633;

// 85700-85799	Static IP/IPoA
var ERR_STAIP_IP_INVAD = 85700;
var ERR_STAIP_MASK_INVAD = 85701;
var ERR_STAIP_GW_INVAD = 85702;
var ERR_STAIP_IP_MASK_CONFLICT = 85703;
var ERR_STAIP_GW_MASK_CONFLICT = 85704;
var ERR_STAIP_IP_GW_CONFLICT = 85705;
var ERR_STAIP_DNS1_INVAD = 85706;
var ERR_STAIP_DNS2_INVAD = 85707;
var ERR_IPOA_PVC_INVAD = 85708;

// 85800-85899	Dynamic IP
var ERR_WAN_HOST_NAME_INVALID = 85800;
var ERR_WAN_DNS_INVAD = 85801;

// 85900-85999	PPPoE/PPPoA	
var ERR_IDLETIME_INVAD = 85900;
var ERR_PPPOA_PVC_INVAD = 85901;

// 86000-86099 SNMP
var ERR_SNMP_RCOMMUNITY_EMPTY	= 86000;
var ERR_SNMP_SCOMMUNITY_EMPTY	= 86001;
var ERR_SNMP_TRAP_IP_INVAD		= 86002;

//86100-86199 USB
var ERR_USB_SHARE_NAME_EMPTY					= 86111;
var ERR_USB_SHARE_NAME_NOT_ASCII				= 86112;
var ERR_USB_INVALID_CHAR_IN_FOLDER_NAME			= 86113;
var ERR_USB_DIR_NAME_EMPTY						= 86114;
var ERR_USB_DIR_NAME_NOT_ASCII					= 86115;
var ERR_USB_DIR_EXIST							= 86116;
var ERR_USB_SHARE_NAME_EXIST					= 86117;
var ERR_USB_DIR_NOT_EXIST						= 86118;
var ERR_USB_INVALID_CHAR_IN_USER_NAME			= 86119;
var ERR_USB_CONFLICT_USER_NAME					= 86120;
var ERR_USB_FTP_PORT_EMPTY						= 86121;
var ERR_USB_FTP_PORT_NOT_NUM					= 86122;
var ERR_USB_FTP_PORT_RANGE						= 86123;
var ERR_USB_FTP_PORT_CONFLICT					= 86124;
var ERR_USB_DLNA_SERVER_NAME_EMPTY              = 86125;
var ERR_USB_DLNA_SERVER_NAME_NOT_ASCII          = 86126;
var ERR_USB_DLNA_INVALID_SERVER_NAME            = 86127;
//86180-86199 USB 3G
var ERR_USB_3G_FILE_NONE						= 86180;

// 86200-86299	IPv6
var ERR_IP6_WAN_CONN_NONE		 		= 86200;
var ERR_LAN6_PREFIX_EMPTY 		 		= 86201;
var ERR_LAN6_PREFIX_INVALID		 		= 86202;
var ERR_LAN6_PREFIX_LEN_EMPTY 	 		= 86203;
var ERR_LAN6_PREFIX_LEN_INVALID   		= 86204;
var ERR_LAN6_DHCP6S_START_ID_EMPTY 		= 86205;
var ERR_LAN6_DHCP6S_END_ID_EMPTY 		= 86206;
var ERR_LAN6_LEASE_TIME_EMPTY 			= 86207;
var ERR_LAN6_DHCP6S_START_ID_INVALID	= 86208;
var ERR_LAN6_DHCP6S_END_ID_INVALID 		= 86209;
var ERR_LAN6_LEASE_TIME_INVALID   		= 86210;
var ERR_LAN6_DHCP6S_ADDR_CONFLICT 		= 86211;
var ERR_WAN6_IP_STACK_NONE				= 86220;
var ERR_WAN6_ADDR_INVAD					= 86221;
var ERR_WAN6_PFXLEN_INVAD				= 86222;
var ERR_WAN6_DNS_INVAD					= 86223;
var ERR_ROUTE6_DST_ADDR_VALID 			= 86240;
var ERR_ROUTE6_PREFIX_LEN_VALID 		= 86241;
var ERR_ROUTE6_GW_ADDR_VALID 			= 86242;
var ERR_ROUTE6_GW_VALID 				= 86243;
var ERR_TUNNEL6_DSLITE_REMOTE_INVALID	= 86250;
var ERR_TUNNEL6_DSLITE_WAN_CONN_ERR		= 86251;
var ERR_TUNNEL6_6RD_PREFIX_LEN_INVALID	= 86252;
var ERR_TUNNEL6_6RD_PREFIX_INVALID		= 86253;
var ERR_TUNNEL6_6RD_BR_INVALID			= 86254;
var ERR_TUNNEL6_6RD_IP_MASK_LEN_INVALID	= 86255;
var ERR_TUNNEL6_6RD_NOT_SUPPORT_AUTO	= 86256;
var ERR_TUNNEL6_6RD_WAN_CONN_ERR		= 86257;
var ERR_TUNNEL6_6TO4_WAN_CONN_ERR		= 86258;
var ERR_FW6_ADDR_INVAD					= 86260;
var ERR_FW6_PFXLEN_INVAD				= 86261;

//86400-86499  Voip
var ERR_VOIP_ACCOUNT_MUCH_DEL_ERROR		= 86400;
var ERR_VOIP_ACCOUNT_MUCH_ADD_ERROR		= 86401;
var ERR_VOIP_PROFILE_CONFLICT_ERROR		= 86402;
var ERR_VOIP_NUM_AND_REGISTRAR_CONFLICT_ERROR	= 86403;
var ERR_VOIP_PREFIX_CONFLICT_ERROR		= 86404;
var ERR_VOIP_DEST_EMPTY_ERROR			= 86405;
var ERR_VOIP_PREFIX_MAXLEN_ERROR		= 86406;
var ERR_VOIP_STRIP_LENGTH_ERROR			= 86407;
var ERR_VOIP_INTERFACE_ENABLE_ERROR		= 86408;
var ERR_VOIP_DIALPLAN_ADD_ERROR			= 86409;
var ERR_VOIP_INTERFACE_BAR_ERROR		= 86410;
var ERR_VOIP_ENTRY_MAX_ERROR			= 86411;
var ERR_VOIP_SPEEDDIAL_CONFLICT_ERROR	= 86412;
var ERR_VOIP_USB_DISCONNECT				= 86413;
var ERR_VOIP_USB_NO_FILES_ERROR			= 86414;
var ERR_VOIP_USB_CAP_NOT_EGOUGH			= 86415;
var ERR_VOIP_DIALPLAN_DEL				= 86416;
var ERR_VOIP_TOO_MANY_DIALPLAN			= 86417;
var ERR_VOIP_USB_BUSY_ERROR				= 86418;
var ERR_VOIP_CHAR_ERROR					= 86419;
var ERR_VOIP_NOT_EMPTY					= 86420;
var ERR_VOIP_VALUE_LEN_ERROR			= 86421;
var ERR_VOIP_NUMBER_OUT_RANGE			= 86422;
var ERR_VOIP_VALUE_INVALID				= 86423;
var ERR_VOIP_VALUE_FORMAT_ERROR			= 86424;
var ERR_VOIP_CONTAIN_ILLEGAL_CHAR		= 86425;
var ERR_VOIP_INVALID_IP					= 86426;
var ERR_VOIP_EXIST_ERROR				= 86427;
var ERR_VOIP_LIST_CONFILICT				= 86428;
var ERR_VOIP_PROFILE_NAME_CONFLICT_ERROR	= 86429;

// 87500-87999  Wireless
var ERR_WLAN_SSID_IS_EMPTY=87500;
var ERR_WLAN_SSID_LEN_OUTRANGE=87501;
var ERR_WLAN_WDS_SSID_IS_EMPTY=87502;
var ERR_WLAN_WDS_SSID_LEN_OUTRANGE=87503;
var ERR_WLAN_WDS_BSSID_IS_EMPTY=87504;
var ERR_WLAN_WDS_BSSID_INVALID=87505;
var ERR_WLAN_WDS_ASCII_KEY_INVALID=87506;
var ERR_WLAN_WDS_ASCII_KEY_OUTRANGE=87507;
var ERR_WLAN_WDS_HEX_KEY_INVALID=87508;
var ERR_WLAN_WDS_HEX_KEY_OUTRANGE=87509;
var ERR_WLAN_WDS_PSK_OUTRANGE=87510;
var ERR_WLAN_WDS_AUTO_CHANNEL=87511;
var ERR_WLAN_WDS_CHANNEL=87512;
var ERR_WLAN_SSID_IS_ILLEGAL=87513;
var ERR_WLAN_BEACONINTERVAL_INVAD=87550;
var ERR_WLAN_RTSINTERVAL_INVAD=87551;
var ERR_WLAN_FRAGTH_INVAD=87552;
var ERR_WLAN_DTIMTH_INVAD=87553;
var ERR_WLAN_BEACONINTERVAL_OUTRANGE=87554;
var ERR_WLAN_RTSINTERVAL_OUTRANGE=87555;
var ERR_WLAN_FRAGTH_OUTRANGE=87556;
var ERR_WLAN_DTIMTH_OUTRANGE=87557;
var ERR_WLAN_PIN_EMPTY=87600;
var ERR_WLAN_PIN_LEGNTH_INVALID=87601;
var ERR_WLAN_PIN_INVALID=87602;
var ERR_WLAN_PIN_CHECKSUM_FAIL=87603;
var ERR_WLAN_11N_WEP_CONFLICT=87650;
var ERR_WLAN_11N_TKIP_CONFLICT=87651;
var ERR_WLAN_QSS_WPA_CONFLICT=87652;
var ERR_WLAN_QSS_TKIP_CONFLICT=87653;
var ERR_WLAN_QSS_WEP_CONFLICT=87654;
var ERR_WLAN_MSSID_WEP_CONFLICT=87655; 
var ERR_WLAN_GUESTNETWORK_WEP_CONFLICT = 87656;
var ERR_WLAN_GUESTNETWORK_MAXSTANUM_INVALID = 87657;
var ERR_WLAN_WEP_NO_KEY=87700;
var ERR_WLAN_WEP_KEY_LENGTH_INVALID=87701;
var ERR_WLAN_WEP_KEY_HEX_INVALID=87702;
var ERR_WLAN_WEP_KEY_ASCII_INVALID=87703;
var ERR_WLAN_WPA_PSK_EMPTY=87704;
var ERR_WLAN_WPA_PSK_LENGTH_INVALID=87705;
var ERR_WLAN_WPA_PSK_HEX_INVALID=87706;
var ERR_WLAN_WPA_PSK_ASCII_INVALID=87707;
var ERR_WLAN_WPA_INTERVAL_INVALID=87708;
var ERR_WLAN_WPA_PORT_INVALID=87709;
var ERR_WLAN_WPA_PWD_EMPTY=87710;
var ERR_WLAN_WPA_PWD_INVALID=87711;
var ERR_WLAN_MAC_LIST_EMPTY=87750;
var ERR_WLAN_MAC_INVALID=87751;
var ERR_WLAN_MAC_CONFLICT=87752;
var ERR_WLAN_MAC_FILTER_INVALID=87753;
var ERR_WLAN_MAC_FILTER_DESCRIP_INVALID=87754;

//89000-89100 3G error
var ERR_PIN_CODE_EMPTY=89000;
var ERR_PIN_ASCII=89001;
var ERR_PIN_CODE_CONFLICT=89002;
var ERR_3G_INVLIAD_DIALNUM=89003;

//90000-90600 HTTP protocol error
var ERR_INTERNAL = 90000;
var ERR_NOT_FOUND = 90404;
var ERR_NOT_ACCEPTED = 90500;

//92000-93000 Russian Spec Error
var ERR_VLAN_INVALID_VLANID = 92001;
var ERR_VLAN_SAME_VLANID = 92002;
var ERR_VLAN_NO_INTERNET_GROUP = 92003;

//102000-? IE error
var ERR_NETWORK = 102000;

window.e_str = {};

e_str[CMM_ERROR]				= "Внутренняя ошибка!";
e_str[CMM_RSL_CONFLICT_KEY]		= "Пароль уже существует! Укажите другой пароль.";

// 4500-4599 updata Firmware/Config
e_str[CMM_CFG_FILE_TOO_LONG] = "Недопустимый размер файла! Проверьте файл и попробуйте ещё раз.";
e_str[CMM_CFG_FILE_FORMAT_ERR] = "Выбран неправильный файл.";
e_str[CMM_UPDATE_FILE_LEN_ERR] = "Недопустимый размер файла! Проверьте файл и попробуйте ещё раз.";
e_str[CMM_UPDATE_FILE_VER_ERR] = "Загруженный файл не подходит для данного устройства.";
e_str[CMM_GET_SIGN_ERR] = "Ошибка! Попробуйте ещё раз.";
e_str[CMM_RESTORE_DEFAULT_CFG_ERR] = "не удалось восстановить настройки по умолчанию.";
e_str[CMM_UPDATE_ADDI_HW_VER_ERR] = "Загруженный файл не соответствует аппаратной версии устройства.";

// 4600-4619	sys user
// 4620-4639	management control
// 4640-4659	httpd config

// 4700-4799	firewall & parent control
e_str[CMM_FW_ILLEGAL_IP] = "Неверный IP-адрес!";
e_str[CMM_FW_NOT_LAN_IP] = "IР-адрес узла LAN не находится в одной подсети LAN IP-адресом. Укажите другое значение.";
e_str[CMM_FW_LAN_IP] = "IP-адрес узла WAN и текущий LAN IP-адрес указаны в одной подсети. Укажите другое значение.";
e_str[CMM_FW_ILLEGAL_PORT] = "Номер порта указан неверно! Укажите другое значение(1-65535).";
e_str[CMM_FW_ILLEGAL_MAC] = "MAC-адрес указан неверно! Правильный формат: 00-00-00-00-00-00";
e_str[CMM_FW_EMPTY_INTERNAL_HOST] = "Укажите в настройках IP-адрес, Порт или MAC-адрес для узла LAN.";
e_str[CMM_FW_EMPTY_EXTERNAL_HOST] = "Укажите в настройках IP-адрес, Порт или MAC-адрес для узла WAN.";
e_str[CMM_FW_EMPTY_TASK_SCHEDULE] = "Чтобы новое расписание заработало, необходимо настроить время.";
e_str[CMM_FW_EMPTY_RULE] = "Укажите узел LAN или узел WAN для правил фильтрации.";
e_str[CMM_FW_ILLEGAL_RULE] = "Недопустимое правило фильтрации. Укажите другое правило.";
e_str[CMM_FW_CONFLICT_INTERNAL_HOST] = "Добавленный узел LAN конфликтует с имеющимся узлом LAN.";
e_str[CMM_FW_CONFLICT_EXTERNAL_HOST] = "Добавленный узел WAN конфликтует с имеющимся узлом WAN.";
e_str[CMM_FW_CONFLICT_TASK_SCHEDULE] = "Добавленное расписание конфликтует с другим, ранее настроенным расписанием.";
e_str[CMM_FW_CONFLICT_RULE] = "Добавленное правило фильтрации конфликтует с другим, ранее настроенным правилом.";
e_str[CMM_FW_EMPTY_URL] = "Укажите как минимум URL Интернет-ресурса!";
e_str[CMM_FW_REACH_MAX_URL] = "Указано макимально возможно количество URL!";
e_str[CMM_FW_REQ_DENY] = "Запись используется, удаление невозможно!";
e_str[CMM_FW_MALLOC_RULE_FAILED] = "В настройках правила произошла ошибка.";
e_str[CMM_FW_SET_DEFAULT_ACTION_FAILED] = "Не удалось настроить правило фильтрации по умолчанию.";
e_str[CMM_FW_SET_URL_FAILED] = "Не удалось настроить URL!";
e_str[CMM_PC_MAC_IS_SAME_WITH_PARENT_MAC] = "MAC-адрес контролируемого компьютера должен отличаться от МАС-адреса контролирующего компьютера. Укажите другое значение. ";
e_str[CMM_FW_NAME_INCLUDE_INVALID_CHAR] = "Вводимое вами значение не должно содержать символы: \\/\":*?<>|&. Укажите другое значение.";
e_str[CMM_FW_NAME_END_WITH_SPACE] = "Вводимое вами значение не должно оканчиваться пробелом (неотображаемым символом). Укажите другое значение.";
e_str[CMM_FW_INVILID_URL] = "Введённый вами URL содержит недопустимые символы. Укажите другое значение.";
e_str[CMM_PC_MAC_IS_SAME_WITH_CHILD_MAC] = "MAC-адрес контролирующего компьютера должен отличаться от МАС-адреса контролируемого компьютера.";

// 4800-4899	QoS & TC
e_str[CMM_TC_DOWN_BANDWIDTH] = "Система не может обеспечить запрошенную минимальную скорость входящего трафика. Укажите другое значение.";
e_str[CMM_TC_UP_BANDWIDTH] = "Система не может обеспечить запрошенную минимальную скорость исходящего трафика. Укажите другое значение.";
e_str[CMM_TC_CONFLICT] = "Добавленное правило конфликтует с уже существующими правилами.";
e_str[CMM_TC_START_IP_ERROR] = "Начальный IP-адрес совпадает с LAN IP-адресом или не находится в одной подсети с LAN IP-адресом. Укажите другое значение.";
e_str[CMM_TC_END_IP_ERROR] = "Конечный IP-адрес совпадает с LAN IP-адресом или не находится в одной подсети с LAN IP-адресом. Укажите другое значение.";
e_str[CMM_TC_DOWN_TOTAL_BW] = "Итоговая Входящая пропускная способность не должна быть меньше суммы минимальных скоростей входящего трафика всех включенных правил.";
e_str[CMM_TC_UP_TOTAL_BW] = "Итоговая Исходящая пропускная способность не должна быть меньше суммы минимальных скоростей исходящего трафика всех включенных правил.";
e_str[CMM_TC_MAX_ERROR] = "Список правил контроля пропускной способности заполнен! Чтобы добавить новое правило, удалите одно из правил из списка.";

e_str[CMM_QOS_EMPTY_QUEUE] = "Классификация потока должна быть привязана к одной очереди!";
e_str[CMM_QOS_WRR_TOTALBW_ZERO] = "Весовой коэффициент добавленной очереди WRR (Взвешенный циклический алгоритм) должен быть выше 0!";
e_str[CMM_QOS_MAX_PRIO] = "Приоритет добавленной очереди SP (Строгая приоритетность) не должен превышать 8!";
e_str[CMM_QOS_SAME_QUEUE_NAME] = "Имена очередей с одинаковым направлением QoS должны отличаться!";
e_str[CMM_QOS_SAME_QUEUE_PRIO] = "Приоритет добавляемой очереди SP (Строгая приоритетность) не должен совпадать с приоритетом уже имеющихся очередей SP!";
e_str[CMM_QOS_MAX_QUEUE_WEIGHT] = "Сумма всех очередей WRR (Взвешенный циклический алгоритм) с одинаковым направлением QoS не должна быть более 100!";
e_str[CMM_QOS_SCH_NOT_SUPPORTED] = "Система не может поддерживать запрашиваемый алгоритм расписания!";
e_str[CMM_QOS_SAME_APP_NAME] = "Рабочее имя добавленной классификации не должно совпадать с имеющимися классификациями!";
e_str[CMM_QOS_NONEXIST_APP_INTF] = "Интерфейс QoS, к которому привязана классификация, не существует!";
e_str[CMM_QOS_NOT_WAN_APP_INTF] = "Классификация должна использоваться только для QoS исходящей пропускной способности!";
e_str[CMM_QOS_NONEXIST_APP_QUEUE] = "Очередь QoS, к которой привязана классификация, не существует!";
e_str[CMM_QOS_NONEXIST_CLS_INTF] = "Интерфейс QoS, к которому привязана классификация потока, не существует!";
e_str[CMM_QOS_NONEXIST_CLS_QUEUE] = "Очередь QoS, к которой привязана классификация потока, не существует!";
e_str[CMM_QOS_EMPTY_CLS_INGRESS_INTF] = "Интерфейс исходящей пропускной способности классификации полтока указан неверно!";
e_str[CMM_QOS_SAME_CLS_NAME] = "Имя класса добавленной классификации потока не должно быть таким же, как у существующей классификации потока!";
e_str[CMM_QOS_SAME_CLS_CRITERION] = "Критерий добавленной классификации не должен быть таким же, как у уже существующих классификаций!";
e_str[CMM_QOS_CLS_SRC_IP_NON_LAN] = "IP-адрес источника классификации потока для QoS исходящей пропускной способности должен находиться в пределах LAN!"; 
e_str[CMM_QOS_CLS_DEST_IP_LAN] = "IP-адрес назначения классификации потока для QoS исходящей пропускной способности должен находиться в пределах LAN!"; 
e_str[CMM_QOS_CLS_SRC_IP_LAN] = "IP-адрес источника классификации потока для QoS входящей пропускной способности должен находиться в пределах LAN!"; 
e_str[CMM_QOS_CLS_DEST_IP_NON_LAN] = "IP-адрес назначения классификации потока для QoS входящей пропускной способности должен находиться в пределах LAN!"; 
e_str[CMM_QOS_INTF_INVALID] = "Направление QoS указано неверно!"; 

// 4900-4999	Forward
e_str[CMM_DMZ_IP_NOT_IN_LAN_SUBNET] = "IP-адрес не указан в одной подсети с LAN IP-адресом. Укажите другое значение.";
e_str[CMM_VS_RECORD_ALREADY_FULL] = "Нет свободных мест в списке записей виртуального сервера!";
e_str[CMM_VS_RECORD_ALREADY_EXIST] = "Запись уже существует или порт занят другой записью. ";
e_str[CMM_VS_PORT_OUT_RANGE] = "Номер порта указан неверно! Укажите другое значение (1-65535).";
e_str[CMM_VS_IP_NOT_IN_LAN_SUBNET] = "IP-адрес не указан в одной подсети с LAN IP-адресом. Укажите другое значение.";
e_str[CMM_VS_CONFLICT_REMOTE_WEB_PORT] = "";
e_str[CMM_PT_RECORD_ALREADY_FULL] = "В списке записей Port Triggering нет свободных мест!";
e_str[CMM_PT_TRIG_PORT_CONFLICT] = "Конфликт триггер-порта!";
e_str[CMM_PT_TRIG_PORT_OUT_RANGE] = "Триггер-порт должен быть указан в диапазоне: 1-65535. Укажите другое значение.";
e_str[CMM_PT_OPEN_PORT_OUT_RANGE] = "Входящий порт должен быть указан в пределах: 1-65535. Укажите другое значение.";
e_str[CMM_PT_RECORD_ALREADY_EXIST] = "Запись Port Triggering конфликтует с уже существующей записью!";

// 5000-5099	DHCP server
e_str[CMM_LAN_IP_ERR] 													= "LAN IP-адрес указан неверно! Укажите другое значение.";
e_str[CMM_LAN_MASK_ERR] 												= "Маска подсети указана неверно! Укажите другое значение.";
e_str[CMM_LAN_IP_MASK_DISMATCH] 										= "LAN IP-адрес не соответствует маске подсети либо этот IP-адрес зарезервирован.";
e_str[CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_WAN] 							= "LAN IP-адрес не должен быть в одной подсети с WAN IP-адресом. Укажите другое значение.";
e_str[CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_OTHER_LAN] 					= "LAN IP-адрес не должен находиться в одной подсети с LAN IP-адресом или другими группами. Укажите другое значение.";
e_str[CMM_LAN_UNEXPECT_EXISTING_LAN_IP_AND_MASK]						= "Не удалось получить LAN IP-адрес по умолчанию для новой группы. Измените LAN IP-адрес и Маску подсети других групп.";

e_str[CMM_DHCPS_SRV_MIN_ADDR_ERR] 										= "Начальный IP-адрес указан неверно. Укажите другое значение.";
e_str[CMM_DHCPS_SRV_MAX_ADDR_ERR] 										= "Конечный IP-адрес указан неверно. Укажите другое значение.";
e_str[CMM_DHCPS_SRV_GATEWAY_ADDR_ERR] 									= "Маска подсети указана неверно. Укажите другое значение.";
e_str[CMM_DHCPS_SRV_DNS1_ADDR_ERR] 										= "Предпочитаемый DNS-сервер указан неверно! Укажите другое значение.";
e_str[CMM_DHCPS_SRV_DNS2_ADDR_ERR] 										= "Альтернативный DNS-сервер указан неверно! Укажите другое значение.";
e_str[CMM_DHCPS_SRV_RELAY_SRV_ADDR_ERR] 								= "IP-адрес удалённого сервера указан неверно! Укажите другой адрес.";
e_str[CMM_DHCPS_SRV_RELAY_SRV_ADDR_EMPTY] 								= "Введите IP-адрес удалённого сервера.";
e_str[CMM_DHCPS_SRV_MIN_ADDR_NOT_IN_THE_SAME_SUBNET] 					= "Начальный IP-адрес не указан в пределах одной подсети с LAN IP-адресом, либо данный IP-адрес зарезервирован. Введите другой IP-адрес.";
e_str[CMM_DHCPS_SRV_MAX_ADDR_NOT_IN_THE_SAME_SUBNET] 					= "Конечный IP-адрес не указан в пределах одной подсети с LAN IP-адресом, либо данный IP-адрес зарезервирован. Укажите другой адрес.";
e_str[CMM_DHCPS_SRV_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET] 				= "Основной шлюз не указан в пределах одной подсети с LAN IP-адресом, либо данный IP-адрес зарезервирован. Укажите другой адрес.";

e_str[CMM_DHCPS_FIX_MAP_MAC_ADDR_ERR] 									= "IP-адрес указан неверно! Укажите другой адрес.";
e_str[CMM_DHCPS_FIX_MAP_IP_ADDR_ERR] 									= "МАС-адрес указан неверно. Укажите другой МАС-адрес.";
e_str[CMM_DHCPS_FIX_MAP_IP_NOT_IN_THE_SAME_SUBNET] 						= "IP-адрес не указан в пределах одной подсети с LAN IP-адресом, либо данный IP-адрес зарезервирован. Укажите другой адрес.";
e_str[CMM_DHCPS_FIX_MAP_MAC_CONFLICT]				 					= "MAC-адрес конфликтует с существующими правилами. Укажите другой МАС-адрес.";
e_str[CMM_DHCPS_FIX_MAP_IP_CONFLICT] 									= "IP-адрес конфликтует с существующими правилами. Укажите другой адрес.";

e_str[CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_EMPTY]	 					= "Укажите Имя клиента.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_VID_EMPTY] 							= "Укажите ID изготовителя.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_ERR] 							= "Начальный IP-адрес указан неверно. Укажите другое значение.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_ERR] 							= "Конечный IP-адрес указан неверно. Укажите другое значение.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_IPRouters_ADDR_ERR] 					= "Основной шлюз не указан либо указан неверно. Укажите другое значение.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_DNS1_ADDR_ERR] 						= "Предпочитаемый DNS-сервер не указан либо указан неверно. Укажите другое значение.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_DNS2_ADDR_ERR] 						= "Альтернативный DNS-сервер не указан либо указан неверно. Укажите другое значение.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_NOT_IN_THE_SAME_SUBNET] 		= "Начальный IP-адрес не указан в пределах одной подсети с LAN IP-адресом, либо данный IP-адрес зарезервирован.  Укажите другой IP-адрес.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_NOT_IN_THE_SAME_SUBNET] 		= "Конечный IP-адрес не указан в пределах одной подсети с LAN IP-адресом, либо данный IP-адрес зарезервирован. Укажите другой адрес.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET] 	= "Шлюз по умолчанию не указан в пределах одной подсети с LAN IP-адресом, либо данный IP-адрес зарезервирован. Укажите другой адрес.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_CONPLICT] 					= "Имя клиента конфликтует с уже существующими значениями Имени клиента. Укажите другое значение.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_VID_CONPLICT] 							= "ID изготовителя конфликтует с уже существующими значениями ID изготовителя. Укажите другое значение.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_POOLS_CONPLICT]						= "Пул DHCP-адресов совпадает с уже существующим пулом DHCP-адресов. Укажите другое значение";
e_str[CMM_DHCPS_CONDITIONAL_POOL_OPTION_CODE_INVALID] 					= "Зарезервированная опция недоступна.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_OPTION_VALUE_EMTPY] 					= "Укажите значения зарезервированной опции.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_VID_ERR]								= "ID изготовителя конфликтует с указанным ранее параметром ID изготовителя. Укажите другое значение.";

// 5100-5199	router
e_str[CMM_DEFAULT_ROUTE_NAME_ERR] = "Основной шлюз указан неверно. Укажите другое значение.";
e_str[CMM_STATIC_ROUTE_DEST_IP_ERR] = "IP-адрес назначения указан неверно! Укажите другое значение.";
e_str[CMM_STATIC_ROUTE_DEST_SUB_ERR] = "Маска подсети указана неверно! Укажите другое значение.";
e_str[CMM_STATIC_ROUTE_GATEWAY_ERR] = "Шлюз указан неверно! Укажите другое значение.";
e_str[CMM_STATIC_ROUTE_SUB_DISMATCH_IP] = "Маска подсети не соответствует IP-адресу назначения. Укажите другое значение.";
e_str[CMM_STATIC_ROUTE_DEST_CONFLICT_LAN] = "IP-адрес назначения не может находиться в одной подсети с LAN IP-адресом. Укажите другое значение.";
e_str[CMM_STATIC_ROUTE_DEST_CONFLICT_WAN] = "IP-адрес назначения не может находиться в одной подсети с WAN IP-адресом. Укажите другое значение.";
e_str[CMM_STATIC_ROUTE_ENTRY_CONFLICT] = "Запись уже существует! Укажите другое значение.";
e_str[CMM_STATIC_ROUTE_NOT_SAME_NET] = "Шлюз должен находиться в одной подсети с IP-адресом интерфейса устройства. Укажите другое значение.";
e_str[CMM_STATIC_ROUTE_NAME_ERR] = "Статический маршрут указан неверно! Укажите другое значение.";
e_str[CMM_STATIC_ROUTE_CONN_ERR] = "Подключение, к которому привязана запись, не существует!";
e_str[CMM_STATIC_ROUTE_NEED_IF] = "Не удаётся найти соответствующий интерфейс! Выберите интерфейс вручную.";

// 5200-5299	DNS & DDNS
e_str[CMM_DNS_DEFAULT_NAME_ERR] = "Ошибка DDNS! Повторите попытку.";
e_str[CMM_DNS_SET_ERR] = "Не удалось настроить DDNS. Повторите попытку.";
e_str[CMM_DDNS_PH_CFG_MSG_ERROR] = "Не удалось настроить DDNS.";
e_str[CMM_DDNS_PH_STATE_GET_ERROR] = "Не удалось получить информацию о DDNS."
e_str[CMM_DDNS_PH_USR_ERROR] = "Имя пользователя не может содержать более 64 символов.";
e_str[CMM_DDNS_PH_PWD_ERROR] = "Пароль не может содержать более 64 символов.";
e_str[CMM_DDNS_PH_NO_RUN] = "Служба DDNS не работает.";

// 5300-5349	SNTP
e_str[CMM_SNTP_SET_ERR] = "Ошибка сервера времени! Повторите попытку.";
e_str[CMM_SNTP_YEAR_ERR] = "Неправильный формат времени. Укажите другое значение в пределах: 1970-2037.";
e_str[CMM_SNTP_MONTH_ERR] = "Неправильный формат месяца. Укажите другое значение в пределах: 01-12.";
e_str[CMM_SNTP_DAY_ERR] = "Неправильный формат дня. Укажите другое значение в пределах: 01-31.";
e_str[CMM_SNTP_HOUR_ERR] = "Неправильный формат часа. Укажите другое значение в пределах: 00-23.";
e_str[CMM_SNTP_MONUTES_ERR] = "Неправильный формат минут. Укажите другое значение в пределах: 00-60.";
e_str[CMM_SNTP_SECONDS_ERR] = "Неправильный формат секунд. Укажите другое значение в пределах: 00-60.";

e_str[CMM_DST_START_INVALID] = "Начальная дата указана неверно!",
e_str[CMM_DST_END_INVALID] = "Конечная дата указана неверно!",	
e_str[CMM_DST_CFG_INVALID] = "Настройки летнего времени указаны неверно! Начальная дата должна быть раньше конечной даты!",	
// 5350-5399	CLI

// 5400-5499	IP&ARP
e_str[CMM_ARP_BIND_ENTRY_OVERFLOW] = "Достигнуто максимальное количество записей привязки!";
e_str[CMM_ARP_BIND_ENTRY_CONFLICT_WHEN_EDIT] = "Добавленная запись привязки ARP конфликтует с уже существующей записью!";
e_str[CMM_ARP_BIND_ENTRY_CONFLICT_WHEN_IMPORT] = "Загружаемая запись привязки ARP конфликтует с уже существующей записью!";
e_str[CMM_ARP_BIND_ENTRY_IP_ADDR_ERR] = "Неправильный формат IP-адреса.";
e_str[CMM_ARP_BIND_ENTRY_MAC_ADDR_ERR] = "Неправильный формат МАС-адреса.";
e_str[CMM_ARP_BIND_ENTRY_STATE_ERR] = "Неправильное состояние!";
e_str[CMM_ARP_BIND_ENTRY_IP_NOT_IN_LAN_SUBNET] = "IP-адрес не находится в пределах одной подсети с LAN IP-адресом. Укажите другой адрес.";
e_str[CMM_ARP_BIND_ADD_SYS_ENTRY_FAILED] = "Не удалось добавить запись в таблицу ARP!";
e_str[CMM_ARP_BIND_DEL_SYS_ENTRY_FAILED] = "Не удалось удалить запись из таблицы ARP!";
e_str[CMM_ARP_BIND_SET_SYS_ENTRY_FAILED] = "Не удалось настроить запись для таблицы ARP!"; 
e_str[CMM_ARP_BIND_PARAM_FORMAT_ERR] = "Неправильный формат.";

// 5500-5519	AutoPVC

// 5520-5549	IPTV
e_str[CMM_IPTV_INVALIED_VCI]	= "Параметр VCI указан неверно. Укажите другое значение.";
e_str[CMM_IPTV_INVALIED_VPI]	= "Параметр VPI указан неверно. Укажите другое значение.";
e_str[CMM_IPTV_INVALIED_LANPORT]= "Порт LAN указан неверно. Укажите другое значение.";
e_str[CMM_IPTV_BR_NOTIN_GROUP]	= "Соединение 'мост' для IPTV находится за пределами данной группы!";
e_str[CMM_IPTV_LAN_NOTIN_GROUP]	= "IPTV LAN-порт находится за пределами данной группы!";
e_str[CMM_IPTV_LANPORT_ALREADY_USED] = "Порт LAN для соединения IPTV занят другим медиа-подключением (Ethernet WAN). Проверьте подключения.";
e_str[CMM_IPTV_ETHWAN_NOT_ENABLE]        = "Ethernet WAN не включен!";
e_str[CMM_IPTV_LANPORT_EMPTY]           = "IPTV LAN-порт не указан!";
e_str[CMM_IPTV_IP_IN_SAME_SUBNET_WITH_WAN]  = "IPTV LAN IP-адрес конфликтует с WAN IP-адресом!";

// 5550-5569	ETH WAN
e_str[CMM_ETHWAN_INTF_NOTIN_DFTGROUP]	= "Интерфейс Ethernet WAN находится за пределами группы по умолчанию!";
e_str[CMM_ETHWAN_INTF_NAME_IS_NULL]		= "Имя интерфейса Ethernet WAN не указано!";
e_str[CMM_ETHWAN_VIR_PORTS_IS_NOT_EN]	= "VLAN отключена. Сначала включите VLAN.";
e_str[CMM_ETHWAN_LANPORT_ALREADY_USED]	= "Порт LAN для подключения Ethernet WAN зянят другим медиа-подключением (IPTV). Проверьте подключения.";
e_str[CMM_ETHWAN_INTF_NOT_EXIST]	= "Интерфейс Ethernet WAN не существует!";
e_str[CMM_WAN_DSL_SCR_INVAD]						= "Значение средней скорости (SCR) обязательно указывается.";
e_str[CMM_WAN_DSL_PCR_INVAD]						= "Значение пиковой скорости (PCR) обязательно указывается.";
e_str[CMM_WAN_DSL_SCR_LARGER_THAN_PCR]				= "Значение средней скорости (SCR) не может быть больше Значения пиковой скорости (PCR).";
e_str[CMM_WAN_DSL_MBS_INVAD]						= "Значение Макс. Burst Size (MBS) обязательно указывается.";
e_str[CMM_WAN_DSL_CFG_HAS_NO_INTF]					= "Интерфейс DSL WAN не существует!";
e_str[CMM_WAN_DSL_ERR_LINKTYPE]						= "Тип соединения указан неверно для данного IP-соединения!";

// 5600-5699	Bridge
e_str[CMM_WAN_INVALID_AC_TYPE]						= "Такой тип соединения не поддерживается!";
e_str[CMM_WAN_LINK_CFG_IFNAME_NULL]					= "Интерфейс DSL/Ethernet-соединения НЕ СУЩЕСТВУЕТ!";
e_str[CMM_WAN_NO_LINK_CFG_OBJ]						= "Настройки Ethernet-соединения отсутствуют!";
e_str[CMM_WAN_UNKNOWN_CONN_TYPE]					= "Такой тип соединения не поддерживается!";
e_str[CMM_WAN_CAL_FAKE_MAC_FAILED]					= "не удалось сгенерировать MAC-адрес. Удалите запись и попробуйте ещё раз!";

// 5700-5799	Static IP & Dynamic IP
e_str[CMM_WAN_IP_BOOL_FORMAT_ERROR]					= "Недопустимый логический тип данных!";
e_str[CMM_WAN_IP_PARAM_NOT_VALID_VALUE]				= "Параметр не указан в допустимых пределах!";
e_str[CMM_WAN_IP_INVALID_IP_ADDR_FORMAT]			= "Неверный формат IP-адреса.";
e_str[CMM_WAN_IP_IFNAME_ERROR]					    = "Имя интерфейса указано неверно!";
e_str[CMM_WAN_IP_MAC_ADDR_ERROR]                   	= "МАС-адрес указан неверно либо использован неправильный формат МАС-адреса.";
e_str[CMM_WAN_IP_CLONE_MAC_ADDR_ERROR]            	= "МАС-адрес указан неверно либо использован неправильный формат.";
e_str[CMM_WAN_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN]   	= "WAN IP-адрес не может находиться в одной подсети с LAN IP-адресом!";
e_str[CMM_WAN_IP_DNS_ADDR_ERROR]                   	= "Неправильный формат адреса DNS-сервера.";
e_str[CMM_WAN_IP_IP_ADDR_ERROR]                    	= "IP-адрес указан неверно либо использован неправильный формат.";
e_str[CMM_WAN_IP_GATEWAY_ADDR_ERROR]               	= "Шлюз указан неверно либо использован неправильный формат.";
e_str[CMM_STATIC_IP_INTF_ERR]						= ""; //This error id is not in using.
e_str[CMM_IPOA_NONE_SINGLE_PVC_MULTI_CONN]			= "IPoA не поддерживает множественные подключения по одному постоянному виртуальному каналу (PVC). Укажите подходящие параметры VPI/VCI.";
e_str[CMM_WAN_IPOA_INTF_ERROR]						= "Не удалось создать интерфейс IPoA!";

// 5800-5849 L2TP
e_str[CMM_WAN_L2TP_BOOL_FORMAT_ERROR]					= "Недопустимый логический тип данных!";
e_str[CMM_WAN_L2TP_PARAM_NOT_VALID_VALUE]				= "Параметр не указан в допустимых пределах!";
e_str[CMM_WAN_L2TP_IP_INVALID_IP_ADDR_FORMAT]			= "Неверный формат IP-адреса для IP-соединения.";
e_str[CMM_WAN_L2TP_PPP_INVALID_IP_ADDR_FORMAT]			= "Неверный формат IP-адреса для РРР-соединения.";
e_str[CMM_WAN_L2TP_IFNAMEIP_ERROR]						= "Имя интерфейса указано неверно для IP-соединения.!"
e_str[CMM_WAN_L2TP_L2IFNAME_ERROR]						= "Имя интерфейса указано неверно для РРР-соединения.!"
e_str[CMM_WAN_L2TP_MAC_ADDR_ERROR]                 		= "МАС-адрес указан неверно либо его формат неправилен."
e_str[CMM_WAN_L2TP_CLONE_MAC_ADDR_ERROR]           		= "МАС-адрес указан неверно либо его формат неправилен.";
e_str[CMM_WAN_L2TP_MAC_OVERRIDE_ERROR]					= ""; 
e_str[CMM_WAN_L2TP_MAC_CLONE_ERROR]						= ""; 
e_str[CMM_WAN_L2TP_IP_DNS_ADDR_ERROR]                  	= ""; 
e_str[CMM_WAN_L2TP_IP_IP_ADDR_ERROR]                   	= "IP-адрес указан неверно либо формат IP-подключения неправилен.";
e_str[CMM_WAN_L2TP_PPP_IP_ADDR_ERROR]					= "IP-адрес указан неверно либо формат PPP-подключения неправилен.";
e_str[CMM_WAN_L2TP_IP_GATEWAY_ADDR_ERROR]              	= "Шлюз указан неверно либо формат IP-подключения неправилен.";
e_str[CMM_WAN_L2TP_PPP_GATEWAY_ADDR_ERROR]				= "Шлюз указан неверно либо формат PРР-подключения неправилен.";
e_str[CMM_WAN_L2TP_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN]  	= "IP-адрес IP-подключения не может быть указан в одной подсети с LAN IP-адресом!";
e_str[CMM_WAN_L2TP_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN] 	= "IP-адрес, полученный через РРР-подключение (dial-up), находится в одной подсети LAN IP-адресом!";

// 5850-5899 PPTP
e_str[CMM_WAN_PPTP_BOOL_FORMAT_ERROR]					= "Недопустимый логический тип данных!";
e_str[CMM_WAN_PPTP_PARAM_NOT_VALID_VALUE]				= "Параметр не указан в допустимых пределах!";
e_str[CMM_WAN_PPTP_IP_INVALID_IP_ADDR_FORMAT]			= "Неверный формат IP-адреса IP-подключения.";
e_str[CMM_WAN_PPTP_PPP_INVALID_IP_ADDR_FORMAT]			= "Неверный формат IP-адреса РРР-подключения.";
e_str[CMM_WAN_PPTP_IFNAMEIP_ERROR]						= "Имя интерфейса указано неверно для  IP-подключения!"
e_str[CMM_WAN_PPTP_L2IFNAME_ERROR]						= "Имя интерфейса указано неверно для РРР-подключения!"
e_str[CMM_WAN_PPTP_MAC_ADDR_ERROR]                 		= "МАС-адрес указан неверно либо формат неправилен."
e_str[CMM_WAN_PPTP_CLONE_MAC_ADDR_ERROR]           		= "МАС-адрес указан неверно либо формат неправилен.";
e_str[CMM_WAN_PPTP_MAC_OVERRIDE_ERROR]					= ""; 
e_str[CMM_WAN_PPTP_MAC_CLONE_ERROR]						= ""; 
e_str[CMM_WAN_PPTP_IP_DNS_ADDR_ERROR]                  	= ""; 
e_str[CMM_WAN_PPTP_IP_IP_ADDR_ERROR]                   	= "IP-адрес указан неверно либо формат IP-подключения неправилен.";
e_str[CMM_WAN_PPTP_PPP_IP_ADDR_ERROR]					= "IP-адрес указан неверно либо формат РРP-подключения неправилен.";
e_str[CMM_WAN_PPTP_IP_GATEWAY_ADDR_ERROR]              	= "Шлюз указан неверно либо формат IP-подключения неправилен.";
e_str[CMM_WAN_PPTP_PPP_GATEWAY_ADDR_ERROR]				= "Шлюз указан неверно либо формат PРР-подключения неправилен.";
e_str[CMM_WAN_PPTP_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN]  	= "IP-адрес IP-подключения не может быть указан в одной подсети с LAN IP-адресом!";
e_str[CMM_WAN_PPTP_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN] 	= "IP-адрес, полученный через РРР-подключение (dial-up), находится в одной подсети LAN IP-адресом!";

// 5900-5999	PPPoE/PPPoA	
e_str[CMM_PPP_BOOL_FORMAT_ERROR]					= "Недопустимый логический тип данных!";
e_str[CMM_PPP_PARAM_NOT_VALID_VALUE]				= "Параметр не указан в допустимых пределах!";
e_str[CMM_INVALID_PPP_ADDR_FORMAT]					= "Неверный формат IP-адреса.";
e_str[CMM_PPP_INTF_ERROR]							= "Имя интерфейса указано неверно!";
e_str[CMM_PPP_MAC_OVERRIDE_ERROR]					= "РРРоА-соединение не поддерживает клонирование MAC-адреса!";
e_str[CMM_PPP_MAC_CLONE_ERROR]						= "Ошибка клонирования MAC-адреса!";
e_str[CMM_WAN_EXCEED_LIMITED_NUM]					= "Превышено максимально допустимое число WAN-портов!";
e_str[CMM_WAN_NO_DSL_INTF_ERROR]					= "Нет DSL-интерфейса!";
e_str[CMM_PPPOA_NONE_SINGLE_PVC_MULTI_CONN]			= "PPPoA не поддерживает множественные подключения по одному постоянному виртуальному каналу (PVC). Укажите подходящие параметры VPI/VCI.";
e_str[CMM_WAN_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN]	= "IP-адрес, полученный через РРР-подключение (dial-up), находится в одной подсети LAN IP-адресом";
e_str[CMM_WAN_INVALID_DNS]							= "Адрес DNS-сервера указан неверно!";

e_str[CMM_WAN_NO_PPPOA_INTF]						= "Не удалось создать PPPoA-интерфейс!";
e_str[CMM_WAN_PPPOA_ASSIGN_PVC_FAIL]				= "Не удалось назначить постоянный виртуальный канал PVC к PPPoA-интерфейсу!";
e_str[CMM_WAN_PPPOA_NO_DSL_CFG]						= "Для данного PPPoA-соединения не существует АТМ (асинхронный способ передачи данных) интерфейсов!";
e_str[CMM_WAN_GENERATE_MAC_FAILED]					= "Адрес DNS-сервера указан неверно!";
e_str[CMM_WAN_UNKOWN_PPP_CONN_TYPE]					= "Неизвестный тип PPP-соединения!";
e_str[CMM_PPP_NO_ETH_CFG_INTF]						= "PPPoE-соединение не имеет Еthernet-интерфейса!";

//6100-6199		USB
e_str[CMM_USB_MORE_ALIVE_DEV]						= "Одновременно может быть активировано не более двух устроств.";
e_str[CMM_USB_MORE_ALIVE_LOG]						= "Одновременно можно активировать до восьми параметров.";
e_str[CMM_USB_VOLUME_UMOUNT_FAIL]					= "Логический том ещё используется, нельзя отключать его в данный момент!";
e_str[CMM_USB_NOBODY_ERROR]							= "Имя пользователя не должно содержать недопустимые символы!";
e_str[CMM_USB_ILLEGAL_FOLDER_PATH]					= "Папка указана неверно, попробуйте ещё раз.";
e_str[CMM_USB_3G_UNLOCK_PIN_CODE_FAIL]				= "Не удалось отключить защиту с помощью PIN-кода. Подтвердите PIN-код!";
e_str[CMM_USB_3G_FILE_TOO_LONG]						= "Недопустимый размер файла! Проверьте файл и попробуйте ещё раз.";
e_str[CMM_USB_3G_FILE_FORMAT_ERR]					= "Выбран неправильный файл.";
e_str[CMM_USB_3G_TOO_MANY_ENTRIES]					= "Можно использовать не более 4 записей для загружаемых настроек USB 3G!";
e_str[CMM_USB_3G_UPLOAD_PARSE_FAILED]				= "Не удалось прочесть загружаемый файл.";
e_str[CMM_USB_3G_ENTRY_ALREADY_EXIST]				= "Запись уже существует, сначала удалите старую запись. Загружаемые и существующие записи одинаковы, но содержат разные настройки.";
e_str[CMM_USB_3G_MODEM_ENTRIES_FULL]				= "В списке USB 3G-модемов нет места! Загрузка невозможна.";

// 6200-6299 IPv6  
e_str[CMM_ROUTE6_ADDR_VALID]				= "IPv6-адрес сайта указан неверно!";
e_str[CMM_ROUTE6_DEFAULT_ROUTE_NAME_ERR]	= "Основной шлюз IPv6 указан неверно. Укажите другое значение.";
e_str[CMM_ROUTE6_PREFIX_LEN_VALID]			= "Длина префикса указана неверно!";
e_str[CMM_ROUTE6_ENTRY_DUPLICATE]			= "Статический маршрут IPv6 уже существует.";
e_str[CMM_ROUTE6_DEST_CONFLICT_LAN]			= "IPv6-адрес назначения совпадает с LAN IP-адресом.";
e_str[CMM_ROUTE6_GW_PFX_NOT_SAME_WITH_WAN]	= "Шлюз IPv6 не содержит такой же глобальный префикс сети, как WAN!";
e_str[CMM_ROUTE6_CONN_ERR]					= "Подключение, к которому относится запись, не существует!";

e_str[CMM_WAN6_CONN_TYPE_INVALID]			= "Тип WAN IPv6-соединения неверен!";

e_str[CMM_TUNNEL6_6RD_PREFIX_INVALID]		= "Префикс 6RD неправилен! Проверьте префикс 6RD и длину префикса 6RD.";

//7000-7200
e_str[CMM_VOIP_FEATURE_CODE_LEN_ERROR]		= "Максимальная длина кода функции составляет 3, нельзя оставлять его пустым!";
e_str[CMM_VOIP_FEATURE_CODE_STRING_ERROR]	= "Код функции состоит из символов от 0 до 9, начинается с символа '*' или '#'. Максимальная длина 3!";
e_str[CMM_VOIP_FEATURE_CODE_CONFLICT_ERROR] = "Код функции конфликтует с существующими записями. Укажите другое значение.";
e_str[CMM_VOIP_PROFILE_NAME_CONFLICT_ERROR] = "Примечание: такое Имя профиля существует, старая учётная запись с таким же именем профиля будет удалена!";
e_str[CMM_VOIP_PROFILE_CONFLICT_ERROR]		= "Такое имя профиля уже существует!";

// 7500-7999
e_str[CMM_WLAN_PARAM_CONFLICTE] 			= "Конфликт настроек беспроводного режима! Проверьте настройки, поскольку WEP или WPA/TKIP не поддерживаются в беспроводном режиме 'только 11n'.";	
e_str[CMM_WLAN_INVALID_PARAM_VALUE]			= "Недопустимые настройки беспроводного режима!";	
e_str[CMM_WLAN_SSID_CONFLICTE]				= "SSID уже существует. Укажите другое значение.";	
e_str[CMM_WLAN_MACFILTER_ADDR_CONFLICT]		= "Уже существует такая запись фильтрации MAC-адресов!";	
e_str[CMM_WLAN_READ_DEFAULT_PIN_FAILED]		= "Не удалось получить PIN-код!";
e_str[CMM_WLAN_SSID_CONFLICTE_WITH_GUESTNET]= "Этот SSID уже используется гостевой сетью. Укажите другое значение.";

//7800 IPSEC
e_str[CMM_TUNNEL_NAME_ALREADY_EXITS]           = "Имя туннеля IPsec уже существует!";
e_str[CMM_TUNNEL_LOCAL_IP_SHOULD_IN_LAN]       = "Локальный адрес IPSec-туннеля должен находиться в одной подсети с LAN IP!";
e_str[CMM_TUNNEL_REMOTE_IP_CONFLICT_LAN]       = "Удалённый адрес IPSec-туннеля не может находиться в одной подсети с LAN IP!";

// 9000 DM
e_str[CMM_METHOD_NOT_SUPPORTED]				= "Функция звонка не поддерживается!";
e_str[CMM_REQUEST_DENIED]					= "Отказ в запросе. Проверьте правильность настроек. Убедитесь, что операция может быть выполнена.";
e_str[CMM_INTERNAL_ERROR]					= "Внутренняя ошибка!";
e_str[CMM_INVALID_ARGUMENTS]				= "Недопустимый параметр!";
e_str[CMM_RESOURCE_EXCEEDED]				= "Буфер переполнен либо указано маскимально допустимое значение для параметра настройки!";
e_str[CMM_INVALID_PARAM_NAME]				= "Имя параметра указано неверно.";
e_str[CMM_INVALID_PARAM_TYPE]				= "Тип параметра неверен.";
e_str[CMM_INVALID_PARAM_VALUE]				= "Недопустимое значение!";
e_str[CMM_INVALID_CONFIG_FILE]				= "Недопустимый файл настроек! Проверьте формат файла и настройки.";
e_str[CMM_OBJECT_NOT_FOUND]					= "Нужный объект не найден!";
e_str[CMM_INSTANCE_NOT_FOUND]				= "Нужная запись не найдена!";
e_str[CMM_OBJECT_BUF_EXCEEDED]				= "Буфер переполнен!";
e_str[CMM_REACH_MAX_INSTANCE_NUM]			= "Достигнуто максимальное число записей!";

// 71000-71999 errno from httpd
e_str[ERR_HTTP_ERR_GET] = "Не удалось получить IР-адрес.";
e_str[ERR_HTTP_ERR_SET] = "Не удалось настроить IР-адрес.";
e_str[ERR_HTTP_ERR_IO] = "Не удалось получить доступ к данным.";
e_str[ERR_HTTP_ERR_SOFT_UP] = "Не удалось загрузить файл! Проверьте, правильный ли файл был выбран.";
e_str[ERR_HTTP_ERR_CONF_UP] = "Не удалось загрузить файл с настройками! Проверьте, правильный ли файл был выбран.";
e_str[ERR_HTTP_ERR_USER_NAME_NOT_CORRECT] = "Предыдущее имя пользователя указано неверно!";
e_str[ERR_HTTP_ERR_USER_PWD_NOT_CORRECT] = "Пароль указан неверно!";
e_str[ERR_HTTP_ERR_TOOL_GET_IPMAC] = "Не удалось получить МАС-адрес текущего компьютера!";

//80000 - 81000 WEB basic error
e_str[ERR_UNKOWN] = "Неизвестная ошибка!";

e_str[ERR_GET] = "Не удалось получить параметры!";
e_str[ERR_SET] = "Не удалось настроить параметры!";

e_str[ERR_NUM_INVAD] = "Недопустимое значение!";
e_str[ERR_NUM_OUTRANGE] = "Значение указано не в допустимых пределах!";

e_str[ERR_STR_NOT_ASCII] = "Указанное значение содержит символы не в кодировке ASCII!";

e_str[ERR_IP_FORMAT] = "Неверный формат IP-адреса.";
e_str[ERR_IP_BROADCAST] = "IP-адрес не может быть broadcast-адресом!";
e_str[ERR_IP_SUBNETA_NET_0] = "Номер сети Класса А IP-адреса не может быть 0!";
e_str[ERR_IP_LOOPBACK] = "IP-адрес не может быть loopback-адресом (127.0.0.0)!";
e_str[ERR_MASK_INVAD] = "Недопустимое значение маски подсети. Укажите другое значение.";
e_str[ERR_IP_SUBNETC_HOST_255] = "Номер узла Класса C LAN IP-адреса не может быть 255!";
e_str[ERR_IP_MULTICAST] = "LAN IP-адрес не может быть multicast-адресом!";
e_str[ERR_IP_PRESERVED] = "Нельзя указывать уже зарезервированный LAN IP-адрес!";
e_str[ERR_IPMASK_SUBNET_INVAD] = "IP-адрес не соответствует маске подсети: недопустимый сетевой адрес";
e_str[ERR_IPMASK_HOST_INVAD] = "IP-адрес не соответствует маске подсети: недопустимый номер узла.";
e_str[ERR_IPGW_NOT_SAME_SUBNET] = "IP-адрес не находится в пределах одной подсети со шлюзом!";

e_str[ERR_MAC_FORMAT] = "Неправильный формат МАС-адреса.";
e_str[ERR_MAC_ZERO] = "Формат MAC-адреса не может быть 00:00:00:00:00:00!";
e_str[ERR_MAC_BROADCAST] = "MAC-адрес не может быть broadcast-адресом!";
e_str[ERR_MAC_MULTICAST] = "MAC-адрес не может быть multicast-адресом!";

// 84400-84499 CWMP
e_str[ERR_CWMP_URL_INVAD] = "Укажите правильный URL!";
e_str[ERR_CWMP_PORT_INVAD] = "Укажите доступный порт!";
e_str[ERR_CWMP_PATH_INVAD] = "Укажите правильный путь!";

// 84500-84599 updata Firmware/Config
e_str[ERR_CONF_FILE_NONE] = "Выберите файл с настройками!";
e_str[ERR_FIRM_FILE_NONE] = "Выберите файл обновления настроек!";

// 84600-84619	sys user
e_str[ERR_USER_OLD_PWD_EMPTY] = "Нельзя оставлять поле Предыдущий пароль пустым!";
e_str[ERR_USER_OLD_PWD_ASCII] = "Предыдущий пароль указывается символами в кодировке ASCII!";
e_str[ERR_USER_NAME_EMPTY] = "Нельзя оставлять новое Имя пользователя пустым! ";
e_str[ERR_USER_NAME_ASCII] = "Новое имя пользователя указывается символами в кодировке ASCII!";
e_str[ERR_USER_PWD_EMPTY] = "Поле, где указывается новый пароль, не может оставаться незаполненным!";
e_str[ERR_USER_PWD_ASCII] = "Новый пароль указывается символами в кодировке ASCII!";
e_str[ERR_USER_NAME_PWD_CONFLICT] = "Значение, указанное в поле Подтвердить пароль, не соответствует новому паролю!";
e_str[ERR_USER_OLD_NAME_EMPTY] = "Нельзя оставлять поле Предыдущее имя пользователя пустым!";
e_str[ERR_USER_OLD_NAME_ASCII] = "Предыдущее имя пользователя указывается символами в кодировке ASCII!";
e_str[ERR_USER_NAME_HAS_SPACE] = "Новое имя пользователя не должно содержать пробелы.";
e_str[ERR_USER_PWD_HAS_SPACE] = "Новый пароль не должен содержать пробелы.";
 
// 84620-84639	management control
e_str[ERR_APP_LOCAL_HOST] = "Укажите правильный IP- или MAC-адрес!";
e_str[ERR_APP_REMOTE_HOST] = "Укажите правильный IP- или MAC-адрес!";
e_str[ERR_APP_LOCAL_MAC] = "Укажите правильный MAC-адрес!";
e_str[ERR_APP_REMOTE_IP] = "Укажите правильный IP-адрес!";

// 84640-84659	httpd config
e_str[ERR_HTTP_LOCAL_PORT] = "Номер локального порта управления HTTP не указан числовым значением либо выходит за пределы допустимого диапазона. Введите 80 для порта сервиса или введите число от 1024 до 65535.";
e_str[ERR_HTTPS_LOCAL_PORT] = "Номер локального порта управления HTTPS не указан числовым значением либо выходит за пределы допустимого диапазона. Введите 443 число от 1024 до 65535.";
e_str[ERR_HTTP_HTTPS_LOCAL_CONFILICT] = "Номер локального порта управления HTTP совпадает с Номером локального порта управления HTTPS! Укажите другое значение.";
e_str[ERR_HTTP_REMOTE_PORT] = "Номер удалённого порта управления HTTP не указан числовым значением либо выходит за пределы допустимого диапазона. Введите 80 для порта сервиса или введите число от 1024 до 65535.";
e_str[ERR_HTTP_REMOTE_HTTPS_LOCAL_CONFILICT] = "Номер удалённого порта управления HTTP совпадает с Номером локального порта управления HTTPS! Укажите другое значение.";
e_str[ERR_HTTPS_REMOTE_PORT] = "Номер удалённого порта управления HTTPS не указан числовым значением либо выходит за пределы допустимого диапазона. Введите 443 число от 1024 до 65535.";
e_str[ERR_HTTP_LOCAL_HTTPS_REMOTE_CONFILICT] = "Номер локального порта управления HTTP совпадает с Номером удалённого порта управления HTTP! Укажите другое значение.";
e_str[ERR_HTTP_HTTPS_REMOTE_CONFILICT] = "Номер удалённого порта управления HTTP совпадает с Номером удалённого порта управления HTTP! Укажите другое значение.";

// 84660-84679	time
e_str[ERR_TIME_YEAR_INVAD] = "Неправильный формат года. Укажите другое значение (1970-2037).";
e_str[ERR_TIME_MONTH_INVAD] = "Неправильный формат месяца! Укажите другое значение (1-12).";
e_str[ERR_TIME_DAY_INVAD] = "Неправильный формат дня. Укажите другое значение (01-31).";
e_str[ERR_TIME_HOUR_INVAD] = "Неправильный формат часа. Укажите другое значение (00-23).";
e_str[ERR_TIME_MINUTE_INVAD] = "Неправильный формат минут. Укажите другое значение (00-60).";
e_str[ERR_TIME_SECOND_INVAD] = "Неправильный формат секунд. Укажите другое значение(00-60).";
e_str[ERR_TIME_NTP_SERVER] = "Неправильный формат NTP-сервера. Введите IP-адрес или доменное имя.";

// 84681-84699 diagnostic
e_str[ERR_DIAG_PACKET_SIZE] = "Размер пакета должен быть от 0 до 65500!";
e_str[ERR_DIAG_TIME_OUT] = "Лимит времени должен быть от 1 до 60!";
e_str[ERR_DIAG_EWAN_OFF] = "Подключение WAN не активно. Проверьте, чтобы Интернет-подключение было активно!";
e_str[ERR_DIAG_PING_COUNT] = "Счётчик Ping должен быть от 1 до 50!";
e_str[ERR_DIAG_IP_ADDR] = "Ошибка IP-адреса/Доменного имени!";
e_str[ERR_DIAG_TTL] = "TTL должен быть указан от 1 до 30!";

// 84700-84799		Firewall
e_str[ERR_FW_ENTRYNAME_INVAD] = "Укажите правильное название! Нельзя оставлять незаполненным, название не должно содержать символы: \'\\\/\":*?<>|&\',";
e_str[ERR_FW_URL_INVAD] = "Укажите правильный URL!";
e_str[ERR_FW_RULE_INVAD] = "Выберите хотя бы одну запись узла LAN или узла WAN!";
e_str[ERR_FW_TIME_INVAD] = "Конечное время не может быть раньше начального времени.";
e_str[ERR_FW_URL_NULL] = "Добавьте хотя бы одну запись URL!";

// 84800-84899	QoS & TC
e_str[ERR_TC_IP_PORT_INVAD] = "IP-адрес и номер порта не указаны!";
e_str[ERR_TC_NUM_INVAD] ="Введите число кроме 0!"; 
e_str[ERR_PORT_NUM_INVAD] ="Неправильный номер порта! Укажите другое значение в пределах 1-65535.";
e_str[ERR_PORT_ORDER_INVAD] = "Номер конечного порта меньше, чем номер начального порта. Укажите другое значение.";
e_str[ERR_EMPTY_START_PORT] = "Номер начального порта не может быть не указан, если номер конечного порта уже указан!";
e_str[ERR_TC_BW_ORDER_INVAD] ="Максимальная пропускная способность меньше минимальной пропускной способности!";
e_str[ERR_TC_IP_ORDER_INVAD] ="Конечный IP-адрес меньше начального IP-адреса! Укажите другое значение.";
e_str[ERR_TC_EMPTY_START_IP] = "Начальный IP-адрес не может быть не заполнен, если конечный IP-адрес указан!";
e_str[ERR_TC_BW_NULL] = "Обязательно укажите минимальную скорость входящего и исходящего трафика!";

e_str[ERR_QOS_TOTALBW_INVAD] = "Общая пропускная способность для Взвешенного циклического алгоритма или Контроля трафика указана неверно! Введите число от 1 до максимального значения скорости для данной линии.";
e_str[ERR_QOS_TOTALBW_INVAD_SP] = "Общая пропускная способность для Гарантированной пропускной способности указана неверно! Оставьте незаполненным поле для ограниченной общей пропускной способности или введите число от 1 до макисмального значения скорости для данной линии. ";
e_str[ERR_QOS_QUEUE_DIR] = "Направление не указано! Выберите значение из списка.";
e_str[ERR_QOS_QUEUE_NAME] = "Укажите правильное имя очереди! Нельзя не указывать Имя очереди. Имя очереди не может содержать символы: \'\\\/\":*?<>|&\' ";
e_str[ERR_QOS_QUEUE_NAME_LENGTH] = "Длина имени очереди не может быть более 12 символов!";
e_str[ERR_QOS_QUEUE_WEIGHT_NUM] = "Неверный весовой коэффициент! Введите число от 1 до 100.";
e_str[ERR_QOS_QUEUE_SCH] = "Неверный алгоритм расписания!";
e_str[ERR_QOS_CLS_NAME] = "Укажите правильное имя класса! Этот параметр указывается обязательно. Имя класса не может содержать символы: \'\\\/\":*?<>|&\' ";
e_str[ERR_QOS_CLS_NAME_LENGTH] = "Длина имени класса не может быть более 12 символов!";
e_str[ERR_QOS_CLS_INTF_INVAD] = "Входящий интерфейс не указан! Выберите значение из списка.";
e_str[ERR_MAC_MASK_INVAD] = "Маска МАС-адреса указана неверно!";
e_str[ERR_QOS_EMPTY_QUEUE] = "Очередь не указана! Выберите значение из списка.";
e_str[ERR_QOS_APP_NAME] = "Рабочее время не указано! Выберите значение из списка.";

// 84900-84999	Forward
e_str[ERR_VS_PORT_INVAD] = "Неверный формат сегмента порта, формат должен быть следующим: XX-XX или XX.";
e_str[ERR_FW_ADD_FAILED] = "Не удалось изменить запись!";
e_str[ERR_FTP_DATA_PORT_CONFLICT] = "Чтобы избежать возможных конфликтов с USB FTP-сервером, укажите другой порт сервиса не в пределах 59990-59999.";
e_str[ERR_VS_INTER_PORT_INVAD] = "Неверный формат внутреннего порта. Правильный формат: XX или оставьте это поле пустым.";

// 85000-85099	DHCP server
e_str[ERR_LAN_IP_INVAD] = "Нельзя не указывать IP-адрес порта LAN. Убедитесь, что значение правильно.";
e_str[ERR_LAN_MASK_INVAD] = "Нельзя не указывать маску подсети порта LAN. Убедитесь, что значение правильно.";
e_str[ERR_LAN_IPMASK_INVAD] = "IP-адрес порта LAN не соответствует Маске подсети.";

e_str[ERR_DHCP_START_IP_INVAD] = "Укажите Начальный IP-адрес.";
e_str[ERR_DHCP_END_IP_INVAD] = "Укажите Конечный IP-адрес.";
e_str[ERR_DHCP_LEASE_INVAD] = "Срок действия адреса указан неверно.";
e_str[ERR_DHCP_GATEWAY_INVAD] = "Неправильный формат шлюза!";
e_str[ERR_DOMAIN_INVAD] = "Неправильный формат домена по умолчанию!";
e_str[ERR_DHCP_DNS1_INVAD] = "Неверный формат Предпочитаемого DNS-сервера.";
e_str[ERR_DHCP_DNS2_INVAD] = "Неверный формат Альтернативного DNS-сервера.";
e_str[ERR_DHCP_RMT_SRV_EMPTY] = "Ретрансляция DHCP-сервера включена. Укажите IP-адрес удалённого DHCP-сервера.";
e_str[ERR_DHCP_RMT_SRV_INVAD] = "Неправильный формат адреса Удалённого сервера.";
e_str[ERR_LAN_SEC_IP_INVAD] = "Второй IP-адрес не может совпадать с IP-адресом порта LAN.";
e_str[ERR_DHCP_POOL_INVAD] = "Неправильная настройка пула DHCP-адресов! Пул DHCP-адресов должен находиться в пределах текущей подсети, номер узла не может содержать только бинарные значения: 0 и 1.";	//__CHG__
e_str[ERR_GATEWAY_INVAD] = "Недопустимый адрес шлюза! Адрес шлюза должен быть указан в пределах текущей подсети, а номер узла не может содержать только бинарные значения: 0 и 1.";	//__CHG__
e_str[ERR_DHCP_START_IP_INVAD_1] = "Последняя часть Конечного IP-адреса не может быть 0 и 255.";
e_str[ERR_DHCP_END_IP_INVAD_1] = "Последняя часть Начального IP-адреса не может быть 0 и 255.";
e_str[ERR_DHCP_COND_POOL_DEV_NAME_INVALID] = "Имя устройства указано неверно. Укажите другое значение.";
e_str[ERR_DHCP_COND_POOL_DEV_NAME_EMPTY] = "Укажите имя устройства.";
e_str[ERR_DHCP_COND_POOL_VID_EMPTY] = "Укажите ID изготовителя.";
e_str[ERR_DHCP_COND_POOL_START_IP_INVAD] = "Укажите правильный Начальный IP-адрес.";
e_str[ERR_DHCP_COND_POOL_END_IP_INVAD] = "Укажите правильный Конечный IP-адрес.";
e_str[ERR_DHCP_COND_POOL_GW_INVAD] = "Укажите адрес шлюза.";
e_str[ERR_DHCP_COND_POOL_OPT_VAL_EMPTY] = "Укажите конкретное значение для данного параметра.";
e_str[ERR_DHCP_COND_DNS1_INVAD] = "Укажите доступный адрес DNS-сервера 1.";
e_str[ERR_DHCP_COND_DNS2_INVAD] = "Неверный формат адреса DNS-сервера 2!";
e_str[ERR_DHCP_COND_POOL_VID_INVAD] = "ID изготовителя не может содержать символ: \".";
// 85100-85199	router
// 85200-85299	DNS & DDNS
e_str[ERR_DDNS_USERNAME_EMPTY] = "Нельзя не указывать имя пользователя.";
e_str[ERR_DDNS_PWD_EMPTY] = "Нельзя не указывать пароль.";
e_str[ERR_DDNS_DOMAIN_INVAD] = "Неверное имя домена!";
e_str[ERR_DDNS_DOMAIN_EMPTY] = "Нельзя не указывать имя домена."
e_str[CMM_DYNDNS_USERNAME_ERROR] = "Нельзя не указывать имя пользователя.";
e_str[CMM_DYNDNS_PASSWORD_ERROR] = "Нельзя не указывать пароль.";
e_str[CMM_DYNDNS_USERDOMAIN_ERROR] = "Нельзя не указывать доменное имя, доменное имя  должно быть указано правильно!.";
e_str[CMM_DYNDNS_SERVER_ERROR] = "Нельзя не указывать имя сервера, имя сервера  должно быть указано правильно!.";
e_str[CMM_NOIPDNS_USERNAME_ERROR] = "Нельзя не указывать имя пользователя.";
e_str[CMM_NOIPDNS_PASSWORD_ERROR] = "Нельзя не указывать пароль.";
e_str[CMM_NOIPDNS_USERDOMAIN_ERROR] = "Нельзя не указывать доменное имя, доменное имя  должно быть указано правильно!.";
e_str[CMM_NOIPDNS_SERVER_ERROR] = "Нельзя не указывать имя сервера, имя сервера  должно быть указано правильно!.";
e_str[CMM_CMXDNS_USERNAME_ERROR] = "Нельзя не указывать имя пользователя.";
e_str[CMM_CMXDNS_PASSWORD_ERROR] = "Нельзя не указывать пароль.";
e_str[CMM_CMXDNS_USERDOMAIN_ERROR] = "Нельзя не указывать доменное имя, доменное имя  должно быть указано правильно!.";
e_str[CMM_CMXDNS_SERVER_ERROR] = "Нельзя не указывать имя сервера, имя сервера  должно быть указано правильно!";
// 85300-85349	SNTP
// 85350-85399	CLI
// 85400-85499	IP&ARP
e_str[ERR_ARP_CONFLICT] = "Загруженная запись уже существует.";
e_str[ERR_SEL_INVAD] = "Выберите нужные вам записи.";

// 85500-85519	AutoPVC
e_str[ERR_AUTOPVC_VPI_INVAD] = "Значение VPI должно указываться числом от 0 до 255. Введите другое значение.";
e_str[ERR_AUTOPVC_VCI_INVAD] = "Значение VCI должно указываться числом от 0 до 65535. Введите другое значение.";
e_str[ERR_AUTOPVC_EXSIST_INVAD] = "Этот постоянный виртуальный канал (PVC) уже существует в списке постоянных виртуальных каналов.";

// 85520-85549	IPTV
e_str[ERR_IPTV_LANPORT_EMPTY] = "Неверный порт. Выберите другой.";
// 85550-85569	ETH WAN
e_str[ERR_TYPE_UNPLUGGED] = "Кабель не подключён.\nПеред продолжением убедитесь, что кабель должным образом подключён к порту WAN вашего устройства.";
e_str[ERR_TYPE_NOOPTION] = "Выберите один из вариантов!";

// 85500-85599	DSL
e_str[ERR_DSL_MODULATION_MODE_NULL] = "Выберите хотя бы один режим отладки.";

// 85600-85699	Bridge
e_str[ERR_WAN_VPI_VCI_INVAD] = "Неправильная настройка VPI/VCI.";
e_str[ERR_WAN_PCR_INVAD] = "Недопустимое значение пиковой скорости (РCR). Введите число от 0 до 5500.";
e_str[ERR_WAN_SCR_INVAD] = "Неправильное значение средней скорости (SCR). Введите число от 0 до 5500.";
e_str[ERR_WAN_MBS_INVAD] = "Значение Макс. Burst Size (MBS). Введите число от 0 до 65535.";
e_str[ERR_WAN_CONNECTIONTYPE_NULL] = "Тип подключения не выбран.";
e_str[ERR_WAN_CONNECTIONTYPE_INVAD] = "Данная функция отключена для текущего типа подключения порта WAN.";
e_str[ERR_WAN_MTU_INVAD] = "Неверное значение MTU. Введите число от 576 до 1500.";
e_str[ERR_WAN_PPPOE_MTU_INVAD] = "Неверное значение MTU. Введите число от 576 до 1492.";
e_str[ERR_WAN_DNSADDR_INVAD] = "Неверная настройка адреса DNS-сервера.";
e_str[ERR_WAN_SECDNS_INVAD] = "Неверная настройка адреса вторичного DNS-сервера.";
e_str[ERR_WAN_ECHOTIME_INVAD] = "Неправильная настройка времени triggering. Введите числовые значения от 0 до 120.";
e_str[ERR_WAN_USERNAME_INVAD] = "Введите имя пользователя.";
e_str[ERR_WAN_PWD_INVAD] = "Введите пароль.";
e_str[ERR_WAN_DEFGATEWAY_INVAD] = "Выберите порт WAN в качестве системного шлюза по умолчанию.";
e_str[ERR_AUTOPVC_INVAD] = "Не удалось найти постоянный виртуальный канал (PVC).";
e_str[ERR_AUTOPVC_IP_FORMAT] = "Укажите доступный IP-адрес шлюза при автоматическом поиске постоянного виртуального канала (PVC).";
e_str[ERR_GROUP_INVAD] = "Интерфейс не добавлен или не указано имя группы!";
e_str[ERR_INTERFACE_INVAD] = "Сначала выберите интерфейс.";
e_str[ERR_GROUP_NAME_INVAD] = "Эта группа уже существует. Укажите другое значение.";
e_str[ERR_PWD_INVAD] = "Подтвержденный пароль должен совпадать с новым паролем!";
e_str[ERR_USERNAME_INVAD] = "Имя пользователя указано неверно. Укажите другое значение."; 
e_str[ERR_WAN_SCR_EMPTY] = "Значение средней скорости (SCR) указывается обязательно.";
e_str[ERR_WAN_PCR_EMPTY] = "Значение пиковой скорости (РCR) указывается обязательно.";
e_str[ERR_WAN_SCR_LARGER_THAN_PCR] = "Значение средней скорости (SCR) не может превышать Значение пиковой скорости (РCR).";
e_str[ERR_WAN_INTER_GROUPNAME_INVALID] = "Имя группы указано неверно. Укажите другое значение.";
e_str[ERR_WAN_MBS_EMPTY] = "Значение Макс. Burst Size (MBS) указывается обязательно.";
e_str[ERR_WAN_DA_SERVER_NAME_EMPTY] = "Нельзя оставлять пустыми поля IP-адрес/Имя сервера!";
e_str[ERR_WAN_DA_DNS_EMPTY] = "Должен быть указан хотя бы один адрес DNS-сервера, если адрес/имя сервера не являются IP-адресом!";
e_str[ERR_AUTHSERVER_INVAD] = "Укажите IP-адрес сервера или имя узла.";
e_str[ERR_AUTHDOMAIN_INVAD] = "Введите домен аутентификации.";
e_str[ERR_WAN_L2TP_MTU_INVAD] = "Неверное значение MTU. Введите число от 576 and 1460.";
e_str[ERR_WAN_PPTP_MTU_INVAD] = "Неверное значение MTU. Введите число от 576 and 1420.";
e_str[ERR_WAN_BPA_AUTHSERVER_INVAD] = "Введите сервер аутентификации.";

// 85700-85799	Static IP/IPoA
e_str[ERR_STAIP_IP_INVAD] = "IP-адрес указан неверно. Укажите другое значение.";
e_str[ERR_STAIP_MASK_INVAD] = "Маска подсети указана неверно. Укажите другое значение.";
e_str[ERR_STAIP_GW_INVAD] = "Основной шлюз указан неверно. Укажите другое значение.";
e_str[ERR_STAIP_IP_MASK_CONFLICT] = "IP-адрес конфликтует с Маской подсети. Укажите другое значение.";
e_str[ERR_STAIP_GW_MASK_CONFLICT] = "Основной шлюз конфликтует с Маской подсети. Укажите другое значение.";
e_str[ERR_STAIP_IP_GW_CONFLICT] = "Основной шлюз не принадлежит сетевому сегменту IP-адреса. Укажите другое значение.";
e_str[ERR_STAIP_DNS1_INVAD] = "Предпочитаемый DNS-сервер указан неверно. Укажите другое значение.";
e_str[ERR_STAIP_DNS2_INVAD] = "Вторичный DNS-сервер указан неверно. Укажите другое значение.";
e_str[ERR_IPOA_PVC_INVAD] = "IPoA не поддерживает множественные подключения по одному постоянному виртуальному каналу (PVC). Укажите подходящие параметры VPI/VCI.";

// 85800-85899	Dynamic IP
e_str[ERR_WAN_HOST_NAME_INVALID] = "Неверное имя узла. Укажите другое значение.";
e_str[ERR_WAN_DNS_INVAD] = "Вы выбрали ручную настройку адреса DNS-сервера. Укажите хотя бы один адрес DNS-сервера.";

// 85900-85999	PPPoE/PPPoA	
e_str[ERR_IDLETIME_INVAD] = "Неверно указано Максимальное время простоя! Укажите число от 0 до 99!";
e_str[ERR_PPPOA_PVC_INVAD] = "PPPoA не поддерживает множественные подключения по одному постоянному виртуальному каналу (PVC). Укажите подходящие параметры VPI/VCI.";

// 86000-86000 	SNMP
e_str[ERR_SNMP_RCOMMUNITY_EMPTY]	= "Введите значения для Сообщества чтения.";
e_str[ERR_SNMP_SCOMMUNITY_EMPTY]	= "Введите значения для Сообщества записи.";
e_str[ERR_SNMP_TRAP_IP_INVAD]		= "Неверный IP-адрес SNMP-менеджера. Укажите другое значение."; 

//86100-86199 USB
e_str[ERR_USB_SHARE_NAME_EMPTY] 					= "Нельзя оставлять незаполненным поле Имя ресурса с совместным доступом!";
e_str[ERR_USB_SHARE_NAME_NOT_ASCII]					= "Имя ресурса с совместным доступом указывается символами в кодировке ASCII!";
e_str[ERR_USB_INVALID_CHAR_IN_FOLDER_NAME] 			= "Имя папки содержит недопустимые символы: пробел или \\/:*?\"<>|]";
e_str[ERR_USB_DIR_NAME_EMPTY]						= "Нельзя оставлять незаполненным поле Папка!";
e_str[ERR_USB_DIR_NAME_NOT_ASCII]					= "Папка указывается символами в кодировке ASCII!";
e_str[ERR_USB_DIR_EXIST]							= "Эта папка уже существует!";
e_str[ERR_USB_SHARE_NAME_EXIST]						= "Такое Имя ресурса с совместным доступом уже существует!";
e_str[ERR_USB_DIR_NOT_EXIST]						= "Папка с таким именем не существует!";
e_str[ERR_USB_INVALID_CHAR_IN_USER_NAME] 			= "Имя пользователя содержит недопустимые символы: пробел или \\/:*?\"<>|@+=;,.[]()$";
e_str[ERR_USB_CONFLICT_USER_NAME] 					= "Это имя пользователя конфликтует с другим!";
e_str[ERR_USB_FTP_PORT_EMPTY]						= "Укажите порт сервиса!";
e_str[ERR_USB_FTP_PORT_NOT_NUM]						= "Порт сервиса указывается числом!";
e_str[ERR_USB_FTP_PORT_RANGE]						= "Порт сервиса выходит за рамки допустимых пределов!";
e_str[ERR_USB_FTP_PORT_CONFLICT]					= "Порт сервиса уже используется другим сервисом!";
e_str[ERR_USB_DLNA_SERVER_NAME_EMPTY] 				= "Нельзя не указывать Имя сервера!";
e_str[ERR_USB_DLNA_SERVER_NAME_NOT_ASCII] 			= "Имя сервера указывается символами в кодировке ASCII!!";
e_str[ERR_USB_DLNA_INVALID_SERVER_NAME] 			= "Имя сервера содержит недопустимые символы: пробел или \\/*?\"<>|]";
//86180-86199 USB 3G
e_str[ERR_USB_3G_FILE_NONE]							= "Выберите файл с настройками 3G USB-модема для загрузки!";

// 86200-86299	IPv6
e_str[ERR_IP6_WAN_CONN_NONE]				= "Нет подключения WAN! Добавьте подключение WAN.";

e_str[ERR_LAN6_PREFIX_EMPTY]				= "Введите префикс.";
e_str[ERR_LAN6_PREFIX_INVALID]				= "Неверный IPv6-глобальный префикс сети! Укажите другое значение.";
e_str[ERR_LAN6_PREFIX_LEN_EMPTY]			= "Введите длину префикса.";
e_str[ERR_LAN6_PREFIX_LEN_INVALID]			= "Длина префикса должна быть 64.";
e_str[ERR_LAN6_DHCP6S_START_ID_EMPTY]		= "Введите начальный IPv6-адрес идентификатора интерфейса.";
e_str[ERR_LAN6_DHCP6S_END_ID_EMPTY]			= "Введите конечный IPv6-адрес идентификатора интерфейса.";
e_str[ERR_LAN6_LEASE_TIME_EMPTY]			= "Укажите время аренды.";
e_str[ERR_LAN6_DHCP6S_START_ID_INVALID]		= "Начальный IPv6-адрес идентификатора интерфейса указан неверно! Укажите шестнадцатеричное число в диапазоне 1-FFFF.";
e_str[ERR_LAN6_DHCP6S_END_ID_INVALID]		= "Конечный IPv6-адрес идентификатора интерфейса указан неверно! Укажите шестнадцатеричное число в диапазоне 1-FFFF.";
e_str[ERR_LAN6_LEASE_TIME_INVALID]			= "Неверное время аренды! Укажите число в диапазоне 0-999999.";
e_str[ERR_LAN6_DHCP6S_ADDR_CONFLICT]		= "Неправильно указан параметр! Начальный идентификатор интерфейса больше конечного идентификатора интерфейса.";

e_str[ERR_WAN6_IP_STACK_NONE]				= "Выберите хотя бы один IP-стек!";
e_str[ERR_WAN6_ADDR_INVAD]					= "Неправильный формат IPv6-адреса!";
e_str[ERR_WAN6_PFXLEN_INVAD]				= "Длина префикса представляет собой число от 0 до 128.";
e_str[ERR_WAN6_DNS_INVAD]					= "Вы выбрали ручную настройку IPv6-адреса DNS-сервера, введите хотя бы один доступный IPv6-адрес DNS-сервера.";

e_str[ERR_ROUTE6_DST_ADDR_VALID]			= "Укажите правильный IPv6-адрес назначения.";
e_str[ERR_ROUTE6_PREFIX_LEN_VALID]			= "Правильно укажите длину префикса. Это значение не должно превышать 64.";
e_str[ERR_ROUTE6_GW_ADDR_VALID]				= "Правильно укажите IPv6-адрес шлюза.";
e_str[ERR_ROUTE6_GW_VALID]					= "Адрес шлюза не может иметь такой же префикс, как у IPv6-адреса выбранного интерфейса WAN.";

e_str[ERR_TUNNEL6_DSLITE_REMOTE_INVALID]	= "Правильно укажите удалённый IPv6-адрес.";
e_str[ERR_TUNNEL6_DSLITE_WAN_CONN_ERR]		= "DS-Lite IPv4 WAN-подключение невозможно. Проверьте подключения WAN.";
e_str[ERR_TUNNEL6_6RD_PREFIX_LEN_INVALID]	= "Укажите правильную длину префикса 6RD. Значение должно быть в пределах 1-32.";
e_str[ERR_TUNNEL6_6RD_PREFIX_INVALID]		= "Укажите префикс 6RD правильно.";
e_str[ERR_TUNNEL6_6RD_BR_INVALID]			= "Укажите IPv4-адрес граничного ретранслятора правильно.";
e_str[ERR_TUNNEL6_6RD_IP_MASK_LEN_INVALID]	= "Введите длину IPv4-маску правильно. Значение должно быть в пределах 1-32.";
e_str[ERR_TUNNEL6_6RD_NOT_SUPPORT_AUTO]		= "Автоматическая настройка 6RD поддерживается только при использовании Динамического IP-адреса (Тип подключения WAN). Измените тип настройки на ручной или выберите другой тип подключения!";
e_str[ERR_TUNNEL6_6RD_WAN_CONN_ERR]			= "IPv6 WAN-подключения не допустимы в 6RD. Проверьте подключения WAN.";
e_str[ERR_TUNNEL6_6TO4_WAN_CONN_ERR]		= "IPv6 WAN-подключения не допустимы в 6to4. Проверьте подключения WAN.";

e_str[ERR_FW6_ADDR_INVAD]					= "Неправильный формат IPv6-адреса!";
e_str[ERR_FW6_PFXLEN_INVAD]					= "Длина префикса указана неверно!";

// 86400-86499  Voip
e_str[ERR_VOIP_ACCOUNT_MUCH_DEL_ERROR]		= "Слишком много существующих учётных записей, одна запись будет удалена. ";
e_str[ERR_VOIP_ACCOUNT_MUCH_ADD_ERROR]		= "Слишком много существующих учётных записей.  Нельзя добавить новую запись, пока вы не удалите одну из старых записей.";
e_str[ERR_VOIP_PROFILE_CONFLICT_ERROR]		= "Имя профиля уже существует.";
e_str[ERR_VOIP_NUM_AND_REGISTRAR_CONFLICT_ERROR]	= "Номер телефона и Регистратор уже сущетсвуют!";
e_str[ERR_VOIP_PREFIX_CONFLICT_ERROR]		= "Префикс уже существует!";
e_str[ERR_VOIP_DEST_EMPTY_ERROR]			= "Нельзя оставлять незаполненным Поле назначения!";
e_str[ERR_VOIP_PREFIX_MAXLEN_ERROR]			= "Максимальная длина указана неверно, значение Маскимальной длины не может быть менее длины префикса.";
e_str[ERR_VOIP_STRIP_LENGTH_ERROR]			= "Длина строки указана неверно, Длина строки не может превышать Длину префикса.";
e_str[ERR_VOIP_INTERFACE_ENABLE_ERROR]		= "Поле Включить интерфейс нельзя оставлять неотмеченным.";
e_str[ERR_VOIP_DIALPLAN_ADD_ERROR]			= "Количество записей номерного плана достигло максимального предела! Если вы хотите добавить другой номерной план, удалите одну из имеющихся записей.";
e_str[ERR_VOIP_INTERFACE_BAR_ERROR]			= "Нельзя оставлять пустым поле Блокировщик вызовов.";
e_str[ERR_VOIP_ENTRY_MAX_ERROR]				= "Нельзя добавить новые записи, поскольку количество записей уже достигло максимального предела!";
e_str[ERR_VOIP_SPEEDDIAL_CONFLICT_ERROR]	= "Такая запись быстрого набора уже существует.";
e_str[ERR_VOIP_USB_DISCONNECT]				= "ПРИМЕЧАНИЕ: USB-устройство хранения данных отключено!";
e_str[ERR_VOIP_USB_NO_FILES_ERROR]			= "Примечание: на USB-устройстве хранения данных не обнаружено правильно отформатированных файлов.";
e_str[ERR_VOIP_USB_CAP_NOT_EGOUGH]			= "Примечание: недостаточно доступного пространства на USB-почтовом ящике!";
e_str[ERR_VOIP_DIALPLAN_DEL]				= "Выбранный вами номерной план будет удалён!";
e_str[ERR_VOIP_TOO_MANY_DIALPLAN]			= "Количество записей номерного плана достигло максимального предела! Если вы хотите добавить другой номерной план, удалите одну из имеющихся записей.";
e_str[ERR_VOIP_USB_BUSY_ERROR]				= "USB-голосовая почта сейчас занята. Повторите попытку позднее!";
e_str[ERR_VOIP_CHAR_ERROR]					= "Вводите символы только в кодировке ASCII!";
e_str[ERR_VOIP_NOT_EMPTY]					= "Введите подходящее значение в данном поле.";
e_str[ERR_VOIP_VALUE_LEN_ERROR]				= "Длина данного значения превышает допустимый предел.";
e_str[ERR_VOIP_NUMBER_OUT_RANGE]			= "Данное значение не указано в рамках допустимых пределов.";
e_str[ERR_VOIP_VALUE_INVALID]				= "Это значение может содержать только символы 0-9.";
e_str[ERR_VOIP_VALUE_FORMAT_ERROR]			= "Данная запись содержит недопустимые символы.";
e_str[ERR_VOIP_CONTAIN_ILLEGAL_CHAR]		= "Данная запись не может содержать недопустимые символы: \" \"\'\\;:<@ \".";
e_str[ERR_VOIP_INVALID_IP]					= "IP-адрес указан неверно.";
e_str[ERR_VOIP_EXIST_ERROR]					= " уже существует.";
e_str[ERR_VOIP_LIST_CONFILICT]				= "Данный телефонный номер уже был добавлен.";
e_str[ERR_VOIP_PROFILE_NAME_CONFLICT_ERROR] = "Примечание: Имя профиля уже существует, другая учётная запись с таким же именем профиля будет удалена!";

// 87500-87999	Wireless
e_str[ERR_WLAN_SSID_IS_EMPTY]="Укажите SSID.";
e_str[ERR_WLAN_SSID_LEN_OUTRANGE]="Поле SSID не может содержать более 32 символов!";
e_str[ERR_WLAN_WDS_SSID_IS_EMPTY]="Укажите SSID (к которой вы хотите подключиться).";
e_str[ERR_WLAN_WDS_SSID_LEN_OUTRANGE]="SSID (к которой вы хотите подключиться) не может быть более 32 символов!";
e_str[ERR_WLAN_WDS_BSSID_IS_EMPTY]="Укажите SSID (к которой вы хотите подключиться).";
e_str[ERR_WLAN_WDS_BSSID_INVALID]="Неверный формат SSID (к которой вы хотите подключиться). Проверьте введённые данные.";
e_str[ERR_WLAN_WDS_ASCII_KEY_INVALID]="Беспроводной пароль в кодировке ASCII не должен содержать недопустимых символов.";
e_str[ERR_WLAN_WDS_ASCII_KEY_OUTRANGE]="Ключ WEP для соединения 'мост' в кодировке ASCII должен состоять из 5, 13 или 16 символов.";
e_str[ERR_WLAN_WDS_HEX_KEY_INVALID]="Шестнадцатеричный пароль для соединения 'мост' содержит недопустимые символы.";
e_str[ERR_WLAN_WDS_HEX_KEY_OUTRANGE]="Ключ WEP для соединения 'мост' в шестнадцатеричном формате должен состоять из 10, 26 или 32 символов.";
e_str[ERR_WLAN_WDS_PSK_OUTRANGE]="Ключ PSK для соединения 'мост' должен быть длиной от 8 до 63 символов в кодировке ASCII или 64 шестнадцатеричных символа.";
e_str[ERR_WLAN_WDS_AUTO_CHANNEL]="Если режим WDS включен, канал должен быть таким же как на главной точке доступа.";
e_str[ERR_WLAN_WDS_CHANNEL]="Канал подключаемой точки доступа: $, он не совпадает с каналом настраиваемой точки доступа. Подтвердите настройки канала.";
e_str[ERR_WLAN_SSID_IS_ILLEGAL]="SSID содержит недопустимые символы.";

e_str[ERR_WLAN_BEACONINTERVAL_INVAD]="Интервал маяка содержит недопустимые символы. Проверьте вводимые данные.";
e_str[ERR_WLAN_RTSINTERVAL_INVAD]="Порог RTS содержит недопустимые символы. Проверьте вводимые данные.";
e_str[ERR_WLAN_FRAGTH_INVAD]="Порог фрагментации содержит недопустимые символы. Проверьте вводимые данные.";
e_str[ERR_WLAN_DTIMTH_INVAD]="Интервал DTIM содержит недопустимые символы. Проверьте вводимые данные.";
e_str[ERR_WLAN_BEACONINTERVAL_OUTRANGE]="Интервал маяка должен быть указан в пределах 25-1000. Проверьте вводимые данные.";
 
e_str[ERR_WLAN_RTSINTERVAL_OUTRANGE]="Порог RTS должен быть указан в пределах 1-2346. Проверьте вводимые данные.";
e_str[ERR_WLAN_FRAGTH_OUTRANGE]="Порог фрагментации должен быть указан в пределах 256-2346. Проверьте вводимые данные.";
e_str[ERR_WLAN_DTIMTH_OUTRANGE]="Интервал DTIM должен быть указан в пределах 1-255.  Проверьте вводимые данные.";

e_str[ERR_WLAN_11N_WEP_CONFLICT]="Режим Только 11n не поддерживается при использовании шифрования WEP.";
e_str[ERR_WLAN_11N_TKIP_CONFLICT]="Режим Только 11n не поддерживается, если включено шифрование TKIP.";
e_str[ERR_WLAN_QSS_WPA_CONFLICT]="Шифрование WPA не поддерживается, если включена функция WPS.";
e_str[ERR_WLAN_QSS_TKIP_CONFLICT]="Шифрование TKIP не поддерживается, если включена функция WPS.";
e_str[ERR_WLAN_QSS_WEP_CONFLICT]="Шифрование WEP не поддерживается, если включена функция WPS";
e_str[ERR_WLAN_MSSID_WEP_CONFLICT]="Мульти SSID не поддерживается, если используется шифрование WEP.";
e_str[ERR_WLAN_GUESTNETWORK_WEP_CONFLICT] = "Гостевая сеть не поддерживается, если используется шифрование WEP";
e_str[ERR_WLAN_GUESTNETWORK_MAXSTANUM_INVALID] = "Количество гостей должно быть от 1 до 32";
e_str[ERR_WLAN_PIN_EMPTY]="Введите PIN-код.";
e_str[ERR_WLAN_PIN_LEGNTH_INVALID]="В поле PIN-код указывается не более 8 символов!";
e_str[ERR_WLAN_PIN_INVALID]="PIN-код указывается только цифрами.";
e_str[ERR_WLAN_PIN_CHECKSUM_FAIL]="Неверный PIN-код. Проверьте вводимое вами значение.";
e_str[ERR_WLAN_WEP_NO_KEY]="Убедитесь, что имеется хотя бы один действующий ключ WEP.";
e_str[ERR_WLAN_WEP_KEY_LENGTH_INVALID]="Введите действующий ключ WEP.";
e_str[ERR_WLAN_WEP_KEY_HEX_INVALID]="Убедитесь, что текущий ключ содержит только шестнадцатеричные символы.";
e_str[ERR_WLAN_WEP_KEY_ASCII_INVALID]="Убедитесь, что текущий ключ содержит символы только в кодировке ASCII.";
e_str[ERR_WLAN_WPA_PSK_EMPTY]="Введите TKIP/AES-пароль!";
e_str[ERR_WLAN_WPA_PSK_LENGTH_INVALID]="Длина TKIP/AES-пароля должна быть более 8 символов.";
e_str[ERR_WLAN_WPA_PSK_HEX_INVALID]="TTKIP/AES-пароль содержит не шестнадцатеричные символы. Введите другой пароль в правильном формате (шестнадцатеричные символы).";
e_str[ERR_WLAN_WPA_PSK_ASCII_INVALID]="TKIP/AES-пароль содержит символы не в кодировке ASCII.  Введите другой пароль в правильном формате (кодировка ASCII).";
e_str[ERR_WLAN_WPA_INTERVAL_INVALID]="Период обновления пароля беспроводной сети указан неверно!";
e_str[ERR_WLAN_WPA_PORT_INVALID]="Укажите правильный порт RADIUS-сервера!";
e_str[ERR_WLAN_WPA_PWD_EMPTY]="Введите пароль RADIUS-сервера!";
e_str[ERR_WLAN_WPA_PWD_INVALID]="Укажите правильный пароль RADIUS-сервера!";

e_str[ERR_WLAN_MAC_LIST_EMPTY]="Список фильтрации MAC-адресов пуст.";
e_str[ERR_WLAN_MAC_INVALID]="МАС-адрес указан неверно. Укажите другой МАС-адрес.";
e_str[ERR_WLAN_MAC_CONFLICT]="Этот адрес уже существует. Укажите другой адрес.";
e_str[ERR_WLAN_MAC_FILTER_INVALID]="Не удалось настроить фильтр MAC-адресов. Убедитесь, что беспроводное вещание включено!";
e_str[ERR_WLAN_MAC_FILTER_DESCRIP_INVALID]="Введите описание правильно! Описание не должно содержать символы \'\\\/\":*?<>|&\', это поле нельзя оставлять незаполненным.";

// 89000-89100 3G error
e_str[ERR_PIN_CODE_EMPTY] = "Нельзя оставлять поле PIN-код незаполненным!";
e_str[ERR_PIN_ASCII] = "PIN-код указывается символами в кодировке АSCII!";
e_str[ERR_PIN_CODE_CONFLICT] = "Ошибка при подтверждении нового PIN-кода! Введите правильное значение для подтверждения нового PIN-кода!";
e_str[ERR_3G_INVLIAD_DIALNUM] = "Неверный номер набора. Можно использовать только символы 0-9, # и *!";

// 90000-96000	HTTP protocol error
e_str[ERR_INTERNAL] = "Внутренняя системная ошибка!";
e_str[ERR_NOT_FOUND] = "Файл не найден!";
e_str[ERR_NOT_ACCEPTED] = "Файл не принят!";

// 92000-93000 For Ruaiss Spec
e_str[ERR_VLAN_INVALID_VLANID] = "Значение VLAN ID слишком малое или большое, пожалуйста укажите значение в диапазоне 2-4094";
e_str[ERR_VLAN_SAME_VLANID] = "для другой службы вам необходимо указать другое значения VLAN ID";
e_str[ERR_VLAN_NO_INTERNET_GROUP] = "вы не можете настроить все порты на IPTV/IP-телефон, если вы настроите их таким образом, вы не сможете управлять маршрутизатором";

//120000-? IE error
e_str[ERR_NETWORK] = "Сетевая ошибка. Проверьте сетевое соединение и настройки сети.";