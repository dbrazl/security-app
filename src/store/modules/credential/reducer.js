import produce from 'immer';

const INITIAL_STATE = {
    encrypted: '',
    status: {
        loading: false,
        error: false,
    },
};

export default function credential(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@credential/ENCRYPT_CREDENTIAL_REQUEST':
                draft.status.loading = true;
                draft.status.error = false;
                draft.status.same = false;
                break;

            case '@credential/ENCRYPT_CREDENTIAL_SUCCESS':
                draft.status.loading = false;
                draft.encrypted = action.payload.hash;
                break;

            case '@credential/ENCRYPT_CREDENTIAL_ERROR':
                draft.status.loading = false;
                draft.status.error = true;
                break;

            case '@credential/ENCRYPT_SAME_PASSWORD':
                draft.status.loading = false;
                draft.status.same = true;
                break;

            case '@credential/RESET_SAME_PASSWORD':
                draft.status.same = false;
                break;

            default:
        }
    });
}
