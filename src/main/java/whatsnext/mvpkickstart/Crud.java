package whatsnext.mvpkickstart;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

/**
 * Copyright (C) What's Next Software, LLC All Rights Reserved
 * Created by wayne on 1/22/2015.
 */
@Entity
public class Crud {

    @Id
    private String id;
    private String name;

    public Crud(String id, String name) {
        this.id = id;
        this.name = name;
    }

    private Crud(){};

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
