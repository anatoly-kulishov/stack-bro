import { connect } from 'react-redux';

import { MyAccount } from './MyAccount';
import { logOut } from '../../../store/actions/authActions';
import { AppStateType } from '../../../store/reducers/rootReducer';

const mapStateToProps = (state: AppStateType) => ({
  ownerProfile: state.profile.ownerProfile,
});

export const MyAccountContainer = connect(mapStateToProps, { logOut })(MyAccount);
