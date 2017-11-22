import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
@Component({
    templateUrl: 'app.html',
    providers: [CameraPreview]
})
export class MyApp {
    rootPage: any = HomePage;
    picture:any
    
    cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: 'rear',
        tapPhoto: true,
        previewDrag: true,
        toBack: true,
        alpha: 1
    };
    
    // picture options
    pictureOpts: CameraPreviewPictureOptions = {
        width: 1280,
        height: 1280,
        quality: 85
    }
    
    
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private cameraPreview: CameraPreview) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
    
            // start camera
            this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
                (res) => {
                    console.log(res)
                },
                (err) => {
                    console.log(err)
                });
    
            // Set the handler to run every time we take a picture
            // this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
            //     console.log(result);
            //     // do something with the result
            // });
    
    
            // picture options
            const pictureOpts: CameraPreviewPictureOptions = {
                width: 1280,
                height: 1280,
                quality: 85
            }
    
            // take a picture
            this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
                this.picture = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
                console.log(err);
                this.picture = 'assets/imgs/test.jpg';
            });
    
    
            // Switch camera
            // this.cameraPreview.switchCamera();
    
            // set color effect to negative
            // this.cameraPreview.setColorEffect('negative');
    
            // Stop the camera preview
            //this.cameraPreview.stopCamera();
    
            
        });
    }
    
    
    
}

