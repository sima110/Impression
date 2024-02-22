function installNsPlugin(pluginUrl, clientVersionRegistry) {
    var err = InstallTrigger.compareVersion(clientVersionRegistry, NS_PRINT_CONTROL_PRODUCTVERSION);

    if (err < 0)
    {
        var xpi = new Object();
        xpi[L_PrintControlPlugin] = pluginUrl;
        InstallTrigger.install(xpi, callback);
    }
}