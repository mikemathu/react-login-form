
const Profile = () => {
    return (
        <body className="hold-transition sidebar-mini">
        <div className="wrapper">
           {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
               {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a className="nav-link" href="#">Report Issue</a>
                    </li>
                </ul>
        
               {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                   {/* Sign Out Dropdown Menu */}
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">
                            Sign Out
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                            <i className="fas fa-th-large"></i>
                        </a>
                    </li>
                </ul>
            </nav>
           {/* /.navbar */}
        
           {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
               {/* Brand Logo */}
                <a href="#" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">PMS</span>
                </a>
        
               {/* Sidebar */}
                <div className="sidebar">
                   {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
        
                   {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                           {/* Add icons to the links using the .nav-icon className
                                 with font-awesome or any other icon font library */}
                            <li className="nav-item">
                                <a href="manage-students.html" className="nav-link">
                                    <i className="nav-icon fas fa-user-graduate"></i>
                                    <p>
                                        Manage Students
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="manage-lecturers.html" className="nav-link">
                                    <i className="nav-icon fas fa-chalkboard-teacher"></i>
                                    <p>
                                        Manage Lecturers
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="manage-projects.html" className="nav-link">
                                    <i className="nav-icon fas fa-folder"></i>
                                    <p>
                                        Manage Projects
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add-project.html" className="nav-link">
                                    <i className="nav-icon fas fa-folder-plus"></i>
                                    <p>
                                        Add Project
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="profile.html" className="nav-link active">
                                    <i className="nav-icon fas fa-user"></i>
                                    <p>
                                        Profile
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="project-categories.html" className="nav-link">
                                    <i className="nav-icon fas fa-th-list"></i>
                                    <p>
                                        Project Categories
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="projects-repository.html" className="nav-link">
                                    <i className="nav-icon fas fa-box"></i>
                                    <p>
                                        Project Repository
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                   {/* /.sidebar-menu */}
                </div>
               {/* /.sidebar */}
            </aside>
        
           {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
               {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Profile</li>
                                </ol>
                            </div>
                    </div>
                </div>
               {/* /.content-header */}
        
               {/* Main content */}
                <div className="content">
                    <div className="container-fluid">
        
                        <div className="card">
                                    <div className="card-header p-2">
                                        <ul className="nav nav-pills">
                                            <li className="nav-item"><a className="nav-link active" href="#aboutme" data-toggle="tab">About Me</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#edit" data-toggle="tab">Edit</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="active tab-pane" id="aboutme">
                                               {/* Post */}
                                                   {/* /.card-header */}
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <img className="profile-user-img img-fluid img-circle"
                                                                 src="dist/img/user4-128x128.jpg"
                                                                 alt="User profile picture" />
                                                        </div>
        
                                                        <h3 className="profile-username text-center">Nina Mcintire</h3>
                                                        <hr />
                                                        <strong><i className="fas fa-book mr-1"></i> Education</strong>
        
                                                        <p className="text-muted">
                                                            B.S. in Computer Science from the University of Tennessee at Knoxville
                                                        </p>
        
                                                        <hr />
        
                                                        <strong><i className="fas fa-map-marker-alt mr-1"></i> Location</strong>
        
                                                        <p className="text-muted">Malibu, California</p>
        
                                                        <hr />
        
                                                        <strong><i className="fas fa-pencil-alt mr-1"></i> Skills</strong>
        
                                                        <p className="text-muted">
                                                            <span className="tag tag-danger">UI Design</span>
                                                            <span className="tag tag-success">Coding</span>
                                                            <span className="tag tag-info">Javascript</span>
                                                            <span className="tag tag-warning">PHP</span>
                                                            <span className="tag tag-primary">Node.js</span>
                                                        </p>
        
                                                        <hr />
        
                                                        <strong><i className="far fa-file-alt mr-1"></i> About Me</strong>
        
                                                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                                                    </div>
                                                   {/* /.card-body */}
                                               {/* /.post */}
                                            </div>
                                           {/* /.tab-pane */}
                                            <div className="tab-pane" id="edit">
                                                <form className="form-horizontal">
                                                    <div className="form-group row">
                                                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Profile</label>
                                                        <div className="col-sm-10">
                                                        <div id="actions" className="row">
                                                            <div className="col-lg-6">
                                                                <div className="btn-group w-100">
                              <span className="btn btn-success col fileinput-button">
                                <i className="fas fa-plus"></i>
                                <span>Add files</span>
                              </span>
                                                                    <button type="submit" className="btn btn-primary col start">
                                                                        <i className="fas fa-upload"></i>
                                                                        <span>Start upload</span>
                                                                    </button>
                                                                    <button type="reset" className="btn btn-warning col cancel">
                                                                        <i className="fas fa-times-circle"></i>
                                                                        <span>Cancel upload</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 d-flex align-items-center">
                                                                <div className="fileupload-process w-100">
                                                                    <div id="total-progress" className="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                                                                        <div className="progress-bar progress-bar-success" style={{width: '0%'}} data-dz-uploadprogress></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table table-striped files" id="previews">
                                                            <div id="template" className="row mt-2">
                                                                <div className="col-auto">
                                                                    <span className="preview"><img src="data:," alt="" data-dz-thumbnail /></span>
                                                                </div>
                                                                <div className="col d-flex align-items-center">
                                                                    <p className="mb-0">
                                                                        <span className="lead" data-dz-name></span>
                                                                        (<span data-dz-size></span>)
                                                                    </p>
                                                                    <strong className="error text-danger" data-dz-errormessage></strong>
                                                                </div>
                                                                <div className="col-4 d-flex align-items-center">
                                                                    <div className="progress progress-striped active w-100" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                                                                        <div className="progress-bar progress-bar-success" style={{width: '0%'}} data-dz-uploadprogress></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-auto d-flex align-items-center">
                                                                    <div className="btn-group">
                                                                        <button className="btn btn-primary start">
                                                                            <i className="fas fa-upload"></i>
                                                                            <span>Start</span>
                                                                        </button>
                                                                        <button data-dz-remove className="btn btn-warning cancel">
                                                                            <i className="fas fa-times-circle"></i>
                                                                            <span>Cancel</span>
                                                                        </button>
                                                                        <button data-dz-remove className="btn btn-danger delete">
                                                                            <i className="fas fa-trash"></i>
                                                                            <span>Delete</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                                        <div className="col-sm-10">
                                                            <input type="email" className="form-control" id="inputName" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label" >Email</label>
                                                        <div className="col-sm-10">
                                                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" readOnly />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputName2" className="col-sm-2 col-form-label">Phone number</label>
                                                        <div className="col-sm-10">
                                                            <input type="number" className="form-control" id="inputName2" placeholder="Phone number" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputExperience" className="col-sm-2 col-form-label">About Me</label>
                                                        <div className="col-sm-10">
                                                            <textarea className="form-control" id="inputExperience" placeholder="About me"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                                                        <div className="col-sm-10">
                                                            <textarea type="text" className="form-control" id="inputSkills" placeholder="Skills"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="offset-sm-2 col-sm-10">
                                                            <button type="submit" className="btn btn-danger">Save</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                           {/* /.tab-pane */}
                                        </div>
                                       {/* /.tab-content */}
                                    </div>
                                    {/* <!-- /.card-body */} 
                                </div>
                               {/* /.card */}
        
                       {/* /.col */}
                       {/* /.row */}
                    </div>
                   {/* /.container-fluid */}
                </div>
               {/* /.content */}
            </div>
           {/* /.content-wrapper */}
        
           {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
               {/* Control sidebar content goes here */}
            </aside>
           {/* /.control-sidebar */}
        
           {/* Main Footer */}
            <footer className="main-footer">
                <strong>Copyright &copy; 2021 <a href="#">PMS</a>.</strong>
                All rights reserved.
            </footer>
        </div>
        </div>
      
        
        
        </body>
    )
}

export default Profile
