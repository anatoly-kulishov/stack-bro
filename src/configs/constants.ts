/**
 * API
 */
export const API_BASE_PATH: string = 'https://social-network.samuraijs.com/api/1.0';
export const API_KEY: string = 'a66e18f8-02d8-41af-affd-0739238765ec';
export const URL_FOR_REGISTRATION: string = 'https://social-network.samuraijs.com/signUp';
export const MOCK_USER_AUTH_DATA = {
  email: 'rewq_gol_47@mail.ru',
  password: 'rewq3511',
};

/**
 * General
 */
export const SITE_TITLE = 'StackBro';
export const SPINNER_SIZE = '40px';
export const DEFAULT_ICONS_SIZE = '24px';
export const MY_LINKEDIN = 'https://www.linkedin.com/in/anatoliy-kulishov';
export const MY_GITHUB = 'https://github.com/dogram99';
export const smthWentWrong = 'Something went wrong, please reload the page';

/**
 * Buttons
 */
export const LOGIN_BUTTON = 'Log in';
export const LOGIN_AS_GUEST_BUTTON = 'Login as guest';
export const CREATE_NEW_ACCOUNT_BUTTON = 'Create New Account';
export const GO_BACK_BUTTON = 'Go Back';
export const REMEMBER_ME_LABEL = 'Remember me';

/**
 * Validations
 */
export const MIN_PASS_LENGTH: number = 8;
export const MIN_SEARCH_LENGTH: number = 3;
export const FILE_SIZE_LIMIT: number = 10;
export const FILE_SIZE_LIMIT_ERROR: string = 'Size must be less 10Mb';
export const ALLOWED_EXTENSIONS_ERROR: string = 'Not allowed format file!';

/**
 * Placeholders
 */
export const EMAIL_PLACEHOLDER = 'Your email';
export const PASSWORD_PLACEHOLDER = 'Your password';
export const CAPTCHA_PLACEHOLDER = 'Symbols from image';

/**
 * Time
 */
export const TIME_FORMATS = {
  POST_ITEM: 'yyyy-MM-dd HH:mm',
  POST_ITEM_FULL: 'yyyy-MM-dd HH:mm:ss',
};

/**
 * Regex
 */
export const ALLOWED_EXTENSIONS = /(\/jpg|\/jpeg|\/png)$/i;
export const VALID_EMAIL_REGEX =
  // eslint-disable-next-line
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const SPECIAL_CHAR_REGEX = /^[A-Za-z0-9 ]+$/;
export const NUMBER_CHARACTER_REGEX = /\d/;
export const PHONE_NUMBER_REGEX = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
export const VALID_URL_REGEX =
  // eslint-disable-next-line
  /(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/;
