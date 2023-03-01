package main

import (
	"context"
	"os"
	"os/exec"
	"runtime"
	"strings"

	"github.com/wailsapp/wails/v2/pkg/options/mac"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
)

type Theme struct {
	WindowsTheme windows.Theme
	MacTheme     mac.AppearanceType
}

// App struct
type App struct {
	ctx   context.Context
	Theme *Theme
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{Theme: &Theme{WindowsTheme: windows.Light, MacTheme: mac.NSAppearanceNameAqua}}
}

// startup is called at application startup
func (a *App) startup(ctx context.Context) {
	// Perform your setup here
	a.ctx = ctx
}

// domReady is called after front-end resources have been loaded
func (a App) domReady(ctx context.Context) {
	// Add your action here
}

// beforeClose is called when the application is about to quit,
// either by clicking the window close button or calling runtime.Quit.
// Returning true will cause the application to continue, false will continue shutdown as normal.
func (a *App) beforeClose(ctx context.Context) (prevent bool) {
	return false
}

// shutdown is called at application termination
func (a *App) shutdown(ctx context.Context) {
	// Perform your teardown here
}

func (a *App) ToggleTheme(theme string) {
	if theme == "light" {
		a.Theme = &Theme{WindowsTheme: windows.Light, MacTheme: mac.NSAppearanceNameAqua}
	} else {
		a.Theme = &Theme{WindowsTheme: windows.Dark, MacTheme: mac.NSAppearanceNameDarkAqua}
	}
}

func (a *App) CopyToClipboard(value string) {
	cmd := exec.Command("", value)

	switch runtime.GOOS {
	case "windows":
		cmd = exec.Command("clip")
	case "linux":
		{
			if os.Getenv("WAYLAND_DISPLAY") == "" {
				cmd = exec.Command("xclip", "-selection", "clipboard")
			} else {
				cmd = exec.Command("wl-copy")
			}
		}

	case "darwin":
		cmd = exec.Command("pbcopy")
	}

	cmd.Stdin = strings.NewReader(value)
	cmd.Run()
}
