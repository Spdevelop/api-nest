import { HttpException, HttpStatus } from '@nestjs/common';
import { ResponseDto } from 'core/dto';

export class ErrorException extends HttpException {
  static BAD_REQUEST = () =>
    new ErrorException(
      {
        code: 'KS001',
        message: 'Bad Request',
        success: false,
      },
      HttpStatus.BAD_REQUEST,
    );

  static BAD_REQUEST_WITH = ({ message }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS001',
        message: message || 'Bad Request',
        success: false,
      },
      HttpStatus.BAD_REQUEST,
    );
  };

  static UNAUTHORIZED = () =>
    new ErrorException(
      {
        code: 'KS002',
        message: 'Unauthorized',
        success: false,
      },
      HttpStatus.UNAUTHORIZED,
    );

  static FORBIDDEN = () =>
    new ErrorException(
      {
        code: 'KS003',
        message: 'Forbidden',
        success: false,
      },
      HttpStatus.FORBIDDEN,
    );

  static FORBIDDEN_WITH = ({ message }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS003',
        message: message || 'Forbidden',
        success: false,
      },
      HttpStatus.FORBIDDEN,
    );
  };

  static INTERNAL_SERVER_ERROR = () =>
    new ErrorException(
      {
        code: 'KS004',
        message: 'Internal Server Error',
        success: false,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );

  static INTERNAL_SERVER_ERROR_WITH = ({ data }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS004',
        message: 'Internal Server Error',
        success: false,
        data,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  };

  static NOT_FOUND = () =>
    new ErrorException(
      {
        code: 'KS005',
        message: 'Not Found',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static NOT_FOUND_WITH = ({ message }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS005',
        message: message || 'Not Found',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );
  };

  static CONFLICT_WITH = ({ message }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS006',
        message,
        success: false,
      },
      HttpStatus.CONFLICT,
    );
  };

  static BRAND_DOES_NOT_EXIST = () =>
    new ErrorException(
      {
        code: 'KS007',
        message: 'Brand does not exist',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static PROJECT_DOES_NOT_EXIST = () =>
    new ErrorException(
      {
        code: 'KS008',
        message: 'Project does not exist',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static NAME_ALREADY_EXISTS = () =>
    new ErrorException(
      {
        code: 'KS009',
        message: 'Name already exists',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static QUOTA_EXCEEDED = () =>
    new ErrorException(
      {
        code: 'KS010',
        message: 'Quota exceeded',
        success: false,
      },
      HttpStatus.FORBIDDEN,
    );

  static USERS_DONT_EXIST = () =>
    new ErrorException(
      {
        code: 'KS011',
        message: 'Some users do not exist',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static RESERVATION_TIME_SLOT_CONFLICT = () =>
    new ErrorException(
      {
        code: 'KS012',
        message: 'Reservation time slot conflict',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ASSET_NOT_FOUND = () =>
    new ErrorException(
      {
        code: 'KS013',
        message: 'Asset not found',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static ORGANIZATION_DOES_NOT_EXIST = () =>
    new ErrorException(
      {
        code: 'KS014',
        message: 'Brand or Project or Zone does not exist',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static ASSET_HAS_BEEN_DELETED = () =>
    new ErrorException(
      {
        code: 'KS015',
        message: 'Asset has been deleted',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ROLE_DOES_NOT_EXIST = () =>
    new ErrorException(
      {
        code: 'KS016',
        message: 'Role does not exist',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static USER_IS_ALREADY_ADDED = () =>
    new ErrorException(
      {
        code: 'KS017',
        message: 'User is already added to this organization',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ORGANIZATION_DOES_NOT_CONTAIN_GROUP = () =>
    new ErrorException(
      {
        code: 'KS018',
        message: 'The organization does not contain this group',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ACTION_CANNOT_BE_COMPLETED = () =>
    new ErrorException(
      {
        code: 'KS019',
        message: 'Action cannot be completed',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ACTION_CANNOT_BE_COMPLETED_WITH = ({
    message,
  }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS019',
        message: message || 'Action cannot be completed',
        success: false,
      },
      HttpStatus.CONFLICT,
    );
  };

  static ASSET_IS_CURRENTLY_UNAVAILABLE = () =>
    new ErrorException(
      {
        code: 'KS020',
        message: 'This asset is currently unavailable',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ASSET_IS_CURRENTLY_UNAVAILABLE_WITH = ({
    message,
  }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS020',
        message: message || 'This asset is currently unavailable',
        success: false,
      },
      HttpStatus.CONFLICT,
    );
  };

  static DUPLICATE_IDENTIFIER = () =>
    new ErrorException(
      {
        code: 'KS021',
        message: 'Duplicate ID card or passport number',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static CANNOT_CANCEL_RESERVATION = () =>
    new ErrorException(
      {
        code: 'KS022',
        message: 'Cannot cancel reservation',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ASSET_IS_UNAVAILABLE = () =>
    new ErrorException(
      {
        code: 'KS023',
        message: 'Asset is unavailable',
        success: false,
      },
      HttpStatus.REQUEST_TIMEOUT,
    );

  static USER_DOES_NOT_EXIST = () =>
    new ErrorException(
      {
        code: 'KS024',
        message: 'User does not exist',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static ORGANIZATION_DOES_NOT_CONTAIN_ROLE = () =>
    new ErrorException(
      {
        code: 'KS025',
        message: 'The organization does not contain this role',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static MEETING_ROOM_DOES_NOT_EXIST = () =>
    new ErrorException(
      {
        code: 'KS026',
        message: 'The meeting room does not exist',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ORGANIZER_DOES_NOT_EXIST = () =>
    new ErrorException(
      {
        code: 'KS027',
        message: 'The organizer does not exist',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ATTENDEES_DOES_NOT_EXIST = () =>
    new ErrorException(
      {
        code: 'KS028',
        message: 'Some attendees do not exist',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static MAILBOX_IS_UNAVAILABLE = () =>
    new ErrorException(
      {
        code: 'KS029',
        message:
          'The organizer mailbox is either inactive, soft-deleted, or is hosted on-premise',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static MEETING_NOT_FOUND = () =>
    new ErrorException(
      {
        code: 'KS030',
        message: 'Meeting not found',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static USER_IS_NOT_IN_LIST = () =>
    new ErrorException(
      {
        code: 'KS031',
        message: 'User is not in the attendees list of the meeting',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static INVALID_ENCRYPTED_MEETING_ID = () =>
    new ErrorException(
      {
        code: 'KS032',
        message: 'Invalid encrypted meeting ID',
        success: false,
      },
      HttpStatus.BAD_REQUEST,
    );

  static MEETING_HAS_ENDED = () =>
    new ErrorException(
      {
        code: 'KS033',
        message: 'The meeting has ended',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static MEETING_HAS_ALREADY_STARTED = () =>
    new ErrorException(
      {
        code: 'KS034',
        message: 'The meeting has already started',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static PHONE_EMAIL_ALREADY_TAKEN = ({ isPhone }) =>
    new ErrorException(
      {
        code: 'KS035',
        message: isPhone ? 'Phone number already taken' : 'Email already taken',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static TOO_MANY_REQUESTS = () =>
    new ErrorException(
      {
        code: 'KS036',
        message: 'Too many requests. Please try again in a few minutes.',
        success: false,
      },
      HttpStatus.TOO_MANY_REQUESTS,
    );

  static SESSION_NOT_FOUND = () =>
    new ErrorException(
      {
        code: 'KS037',
        message: 'Session not found',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static OTP_MISMATCHED = () =>
    new ErrorException(
      {
        code: 'KS038',
        message: 'OTP does not match',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static TITLE_ALREADY_EXISTS_IN_ZONE = () =>
    new ErrorException(
      {
        code: 'KS039',
        message: 'This title already exists in this zone',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static FLOOR_CANNOT_BE_REMOVED = () =>
    new ErrorException(
      {
        code: 'KS040',
        message: 'The floor cannot be deleted because roomIds is not empty',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static LOCKER_NOT_FOUND = () =>
    new ErrorException(
      {
        code: 'KS041',
        message: 'Locker not found',
        success: false,
      },
      HttpStatus.NOT_FOUND,
    );

  static ASSET_CANNOT_BE_DELETE = () =>
    new ErrorException(
      {
        code: 'KS042',
        message: `The asset cannot be deleted because it's assigned to a reservation`,
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static NO_SEND_COMMAND_FOR_OFFLINE_MODE = () =>
    new ErrorException(
      {
        code: 'KS043',
        message: `The sendCommand must be false for updating offlineModeInfo`,
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static PASSCODE_MAXIMUM_ATTEMPTS_REACHED = ({
    data,
  }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS044',
        message: 'The maximum attempt has been reached, please wait!!!',
        success: false,
        data,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  };

  static NUMBER_ALREADY_EXISTS_IN_ZONE = () =>
    new ErrorException(
      {
        code: 'KS045',
        message: 'This number already exists in this zone',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ROOM_NOT_SAME_PROJECT_AS_LOCKER = () =>
    new ErrorException(
      {
        code: 'KS046',
        message: 'The consigneeRoomId is not in same project as locker',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static USER_HAS_NO_EMAIL = () =>
    new ErrorException(
      {
        code: 'KS047',
        message: 'The user has not yet registered an email',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static USER_HAS_NO_PHONE_NUMBER = () =>
    new ErrorException(
      {
        code: 'KS048',
        message: 'The user has not yet registered a phone number',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static NOT_FOUND_REQUESTED_USER_IN_SESSION = () =>
    new ErrorException(
      {
        code: 'KS049',
        message: 'The requested user not found in this sessionId',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static EMAIL_ALREADY_TAKEN_BY_INVITING = () =>
    new ErrorException(
      {
        code: 'KS050',
        message: 'Email already taken by user invitation process',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static QR_CODE_NOT_VALID = () =>
    new ErrorException(
      {
        code: 'KS051',
        message:
          'This QRCode is no longer valid. Please try again with another QRCode',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static CARD_ID_ALREADY_EXISTS = () =>
    new ErrorException(
      {
        code: 'KS052',
        message: 'Card Id already exists in project',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ROLE_CAN_NOT_BE_CHANGED = () =>
    new ErrorException(
      {
        code: 'KS053',
        message: 'This role can not be changed',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static STATION_EXISTED_IN_PROJECT = () =>
    new ErrorException(
      {
        code: 'KS054',
        message: 'This project already has a station',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static CAREER_WINNONIE_RIDER_ALREADY_EXIST = () =>
    new ErrorException(
      {
        code: 'KS055',
        message: 'The carer winnonie-rider already exists in this user',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static CANNOT_CHANGE_YOURSELF_FROM_BRAND_SUPER_ROLE = () =>
    new ErrorException(
      {
        code: 'KS056',
        message: `Cannot change yourself from role's brand creator`,
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static CANNOT_CHANGE_YOURSELF_FROM_PROJECT_SUPER_ROLE = () =>
    new ErrorException(
      {
        code: 'KS057',
        message: `Cannot change yourself from role's project creator`,
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static ERROR_BATTERY_CHANGE_FOR_SAME_ACTION = () =>
    new ErrorException(
      {
        code: 'KS058',
        message: `Winnonie: battery changed while updating the same action`,
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static CANNOT_MOVE_MEETING_ROOM_TO_OTHER_PROJECT = () =>
    new ErrorException(
      {
        code: 'KS059',
        message: 'Cannot move meeting room to other project',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static NOT_A_DEPOSIT_LOCKER = () =>
    new ErrorException(
      {
        code: 'KS060',
        message: 'This locker in not a deposit locker',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ALREADY_HAS_PAIR_LOCKER = () =>
    new ErrorException(
      {
        code: 'KS061',
        message: 'This deposit locker already has pair locker',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static PAIRED_LOCKER_STILL_EXIST = () =>
    new ErrorException(
      {
        code: 'KS062',
        message:
          'Pickup locker which paired with this deposit locker still exist',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static THIS_LOCKER_CAN_NOT_BE_RESERVED = () =>
    new ErrorException(
      {
        code: 'KS063',
        message: 'This locker can not be reserved',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static PAIRED_LOCKER_NOT_AVAILABLE = () =>
    new ErrorException(
      {
        code: 'KS064',
        message: 'Paired locker is not available',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static CANNOT_DO_THIS_ACTION = () =>
    new ErrorException(
      {
        code: 'KS065',
        message: 'This locker can not do this action',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static DUPLICATED_ATTRIBUTES_ERROR_WITH = ({
    message,
    data,
  }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS066',
        message: message || 'Duplicate attributes',
        success: false,
        data,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  };

  static DUPLICATED_PHONE_NUMBER = () =>
    new ErrorException(
      {
        code: 'KS067',
        message: 'Duplicated phone number',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static DUPLICATED_EMAIL = () =>
    new ErrorException(
      {
        code: 'KS068',
        message: 'Duplicated email',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static SERVICE_NOT_AVAILABLE = () =>
    new ErrorException(
      {
        code: 'KS069',
        message: 'Service not available',

        success: false,
      },
      HttpStatus.SERVICE_UNAVAILABLE,
    );

  static USER_IS_ALREADY_REGISTERED = () =>
    new ErrorException(
      {
        code: 'KS070',
        message: 'User is already registered to Keyspace',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static CLIENT_IS_UNREACHABLE = () =>
    new ErrorException(
      {
        code: 'KS071',
        message: 'Client is unreachable',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static MEETING_HAS_ALREADY_CANCELLED = () =>
    new ErrorException(
      {
        code: 'KS072',
        message: 'The meeting has already cancelled',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static EV_LOCKER_NOT_IN_PROJECT = ({ message }: Partial<ResponseDto>) =>
    new ErrorException(
      {
        code: 'KS073',
        message: message || 'This ev locker not existing in project',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static SECRET_DOES_NOT_EXIST = () =>
    new ErrorException(
      {
        code: 'KS074',
        message: 'Secret does not exist',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static ADDRESS_NO_ALREADY_EXISTS_IN_ZONE = () =>
    new ErrorException(
      {
        code: 'KS075',
        message: 'This addressNo already exists in this zone',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static RESERVED_CARD_TITLE_WITH = ({ message }: Partial<ResponseDto>) =>
    new ErrorException(
      {
        code: 'KS076',
        message: message || 'This card title is reserved',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static TITLE_ALREADY_EXISTS_IN_FLOOR = () =>
    new ErrorException(
      {
        code: 'KS077',
        message: 'This title already exists in this floor',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static NUMBER_ALREADY_EXISTS_IN_FLOOR = () =>
    new ErrorException(
      {
        code: 'KS078',
        message: 'This number already exists in this floor',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static PLATE_NUMBER_ALREADY_EXISTS = () =>
    new ErrorException(
      {
        code: 'KS079',
        message: 'Plate Number already exists in project',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static CANNOT_OPEN_LOCKER = () =>
    new ErrorException(
      {
        code: 'KS080',
        message: 'Cannot open locker',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static CANNOT_MOVE_HIK_DEVICE_TO_OTHER_PROJECT = () =>
    new ErrorException(
      {
        code: 'KS081',
        message: 'Cannot move hik-device to other project',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static NUMBER_ALREADY_EXISTS = () =>
    new ErrorException(
      {
        code: 'KS082',
        message: 'Number already exists',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static CANNOT_PROCESS_FACE_ID = () =>
    new ErrorException(
      {
        code: 'KS083',
        message: 'Cannot process this face id',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static CANNOT_GET_VIRTUAL_CARD = () =>
    new ErrorException(
      {
        code: 'KS084',
        message: 'Only guest member and member can get virtual card',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static PRIZE_OF_BOOKING_IS_ENOUGH = () =>
    new ErrorException(
      {
        code: 'KS085',
        message: 'The prize of bookings already enough',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );

  static LINE_ID_ALREADY_EXIST = ({ message }: Partial<ResponseDto>) =>
    new ErrorException(
      {
        code: 'KS086',
        message: message || 'Line Id already exist',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static MAC_ADDR_ALREADY_EXISTS = () =>
    new ErrorException(
      {
        code: 'KS101',
        message: 'The MAC address already exists',
        success: false,
      },
      HttpStatus.CONFLICT,
    );

  static DEVICE_NAME_ALREADY_EXISTS_WITH = ({
    message,
  }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS106',
        message: message || 'The device name already exists in this zone',
        success: false,
      },
      HttpStatus.CONFLICT,
    );
  };

  static UNPROCESSABLE_ENTITY_WITH = ({ message }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS107',
        message: message || 'Unprocessable entity',
        success: false,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  };

  static HIK_DEVICE_NAME_ALREADY_EXISTS_WITH = ({
    message,
  }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS108',
        message: message || 'The hik-device name already exists in this zone',
        success: false,
      },
      HttpStatus.CONFLICT,
    );
  };

  static HIK_DEVICE_IP_ALREADY_EXISTS_WITH = ({
    message,
  }: Partial<ResponseDto>) => {
    return new ErrorException(
      {
        code: 'KS109',
        message: message || 'The hik-device IP already exists in this zone',
        success: false,
      },
      HttpStatus.CONFLICT,
    );
  };

  static VMS_ENDED = () => {
    return new ErrorException(
      {
        code: 'KS110',
        message: 'The vms has ended',
        success: false,
      },
      HttpStatus.CONFLICT,
    );
  };

  static INVALID_MULTIPART_FILES = () => {
    return new ErrorException(
      {
        code: 'KS111',
        message: 'Some file is not Express.multer.file',
        success: false,
      },
      HttpStatus.CONFLICT,
    );
  };

  static NO_MATCH_SYNC_DATA_TYPE = () => {
    return new ErrorException(
      {
        code: 'KS112',
        message: 'No type matches the sync data',
        success: false,
      },
      HttpStatus.CONFLICT,
    );
  };

  static INVALID_PAYMENT_DATA_WITH = (data?: unknown) =>
    new ErrorException(
      {
        code: 'KS201',
        message: 'Invalid payment data',
        success: false,
        data,
      },
      HttpStatus.BAD_REQUEST,
    );

  static INVALID_PAYMENT_ID = () =>
    new ErrorException(
      {
        code: 'KS202',
        message: 'Invalid payment ID',
        success: false,
      },
      HttpStatus.BAD_REQUEST,
    );

  static INVALID_PAYMENT_TOKEN = () =>
    new ErrorException(
      {
        code: 'KS203',
        message: 'Invalid payment token',
        success: false,
      },
      HttpStatus.BAD_REQUEST,
    );

  static PAYMENT_NOT_COMPLETED = () =>
    new ErrorException(
      {
        code: 'KS203',
        message: 'Payment not completed',
        success: false,
      },
      HttpStatus.BAD_REQUEST,
    );
}
