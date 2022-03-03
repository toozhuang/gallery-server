import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { MovieService } from './movie.service';
import { GalleryModule } from '../gallery/gallery.module';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';
import * as path from 'path';
import configuration from '../config/configuration';

@Module({
  imports: [
    GalleryModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development'], // 替换 '.env.prod'
      load: [configuration],
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'cn',
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, '../i18n/'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [MovieService, ConfigService],
})
export class AppModule {}