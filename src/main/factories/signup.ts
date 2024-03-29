import { SignUpController } from "../../presentation/controller/signup/signup";
import { EmailValidatorAdapter } from "../../utils/email-validator-adapter";
import { DbAddAccount } from "../../data/usecases/add-account/db-add-account";
import { BcryptAdapter } from "../../infra/criptography/bcrypt-adapter";
import { AccountMongoRepository } from "../../infra/db/mongodb/account-repository/account";
import { Controller } from "../../presentation/protocols";
import { LogControllerDecorator } from "../decorators/log";



export const makeSignUpController = (): Controller => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcrypAdater = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcrypAdater, accountMongoRepository)
  const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount)
  return new LogControllerDecorator(signUpController)
}
