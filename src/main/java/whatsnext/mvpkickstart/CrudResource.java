package whatsnext.mvpkickstart;

import javax.ws.rs.*;

import java.util.ArrayList;
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

    @PUT
    @Path("{id}")
    public void createNew(@PathParam("id") final String id, Crud crud) {
        crud.setId(id);
        ofy().save().entity(crud);
    }

    @GET
    public java.util.List<Crud> getNew() {
        return new ArrayList<>(ofy().load().type(Crud.class).list());
    }
}
