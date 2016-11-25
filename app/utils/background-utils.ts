//export function setBackgroundGradient(
  //args: { view: View, colorCodes: string[], stops: number[], alpha: number }
//): void {
  //if (args.view.android) {
    //let backgroundDrawable = new android.graphics.drawable.GradientDrawable();
    //let colors = colorUtils.getAndroidColors(args.colorCodes);
    //backgroundDrawable.setColors(colors);
    //backgroundDrawable.setGradientType(0); // Linear Gradient
    //let orientation = android.graphics.drawable.GradientDrawable.Orientation.
      //LEFT_RIGHT;
    //backgroundDrawable.setOrientation(orientation);
    //backgroundDrawable.setAlpha(args.alpha);
    //args.view.android.setBackgroundDrawable(backgroundDrawable);
  //} else if (args.view.ios) {
    //setTimeout(() => {
      //let colors = NSMutableArray.alloc().initWithCapacity(2);
      //args.colorCodes.forEach(function(c) {
        //let rgb = hexToRGB(parseInt(c.split('#')[1], 16));
        //let color = new Color(args.alpha, rgb[0], rgb[1], rgb[2]);
        //colors.addObject(interop.types.id(color.ios.CGColor));
      //});

      //let locations = NSMutableArray.alloc().initWithCapacity(2);
      //args.stops.forEach(function(s) {
        //locations.addObject(NSNumber.numberWithFloat(s));
      //});

      //let gradientLayer = CAGradientLayer.layer();
      //gradientLayer.colors = colors;
      //gradientLayer.locations = locations;
      //gradientLayer.startPoint = CGPointMake(0, 0.5);
      //gradientLayer.endPoint = CGPointMake(1.0, 0.5);
      //gradientLayer.frame = args.view.ios.bounds;

      //args.view.ios.layer.insertSublayerAtIndex(gradientLayer,0);
    //}, 0);
  //}
//}
