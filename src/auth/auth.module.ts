import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { jwtConstants } from '../config/constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [
    UsersModule,
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, SessionSerializer],
})
export class AuthModule {}
