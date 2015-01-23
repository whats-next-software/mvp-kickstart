package whatsnext.mvpkickstart;

import com.google.inject.Binder;
import com.google.inject.Module;
import com.googlecode.objectify.ObjectifyService;

/**
 * Copyright (C) What's Next Software, LLC All Rights Reserved
 * Created by wayne on 1/22/2015.
 */
public class MvpKickstartModule implements Module {
    @Override
    public void configure(Binder binder) {
        ObjectifyService.register(Crud.class);
        binder.bind(CrudResource.class);
    }


}
