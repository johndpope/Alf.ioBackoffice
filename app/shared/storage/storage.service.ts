import { Injectable } from "@angular/core";
import * as application from "application";
import { SecureStorage } from "nativescript-secure-storage";

@Injectable()
export class StorageService {
    private secureStorage : SecureStorage;
    constructor() {
        this.secureStorage = application.ios ? new SecureStorage(kSecAttrAccessibleWhenUnlocked) : new SecureStorage();
    }

    public getOrDefault(key: string, defaultValue: string = null) : string {
        return this.secureStorage.getSync({key: key}) || defaultValue;
    }

    public saveValue(key: string, value: string): void {
        this.secureStorage.setSync({key: key, value: value});
    }
}