package whatsnext.mvpkickstart;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import java.util.UUID;

import static com.googlecode.objectify.ObjectifyService.ofy;

/**
 * Copyright (C) What's Next Software, LLC All Rights Reserved
 * Created by wayne on 1/22/2015.
 */
@Path("cruds")
public class CrudResource {
    @POST
    @Path("{name}")
    public void createNew(@PathParam("name") final String name) {
        ofy().save().entity(new Crud(UUID.randomUUID().toString(), name));
    }

    @GET
    public java.util.List<Crud> getNew() {
        return ofy().load().type(Crud.class).distinct(false).list();
    }
}
