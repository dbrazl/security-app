export function encryptCredentialRequest(password) {
    return {
        type: '@credential/ENCRYPT_CREDENTIAL_REQUEST',
        payload: { password },
    };
}

export function encryptCredentialSuccess(hash) {
    return {
        type: '@credential/ENCRYPT_CREDENTIAL_SUCCESS',
        payload: { hash },
    };
}

export function encryptSamePassword() {
    return {
        type: '@credential/ENCRYPT_SAME_PASSWORD',
    };
}

export function encryptCredentialError() {
    return {
        type: '@credential/ENCRYPT_CREDENTIAL_ERROR',
    };
}

export function resetSamePassword() {
    return {
        type: '@credential/RESET_SAME_PASSWORD',
    };
}
