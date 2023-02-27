package main

import (
	"context"
	"os"
	"os/exec"
	"runtime"
	"strings"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

func (a *App) CopyToClipboard(value string) {
	cmd := exec.Command("", value)

	switch runtime.GOOS {
	case "windows":
		cmd = exec.Command("phcopy")
	case "linux":
		{
			if os.Getenv("WAYLAND_DISPLAY") == "" {
				cmd = exec.Command("xclip", "-selection", "clipboard")
			} else {
				cmd = exec.Command("wl-copy")
			}
		}

	case "darwin":
		cmd = exec.Command("clip")
	}

	cmd.Stdin = strings.NewReader(value)
	cmd.Run()
}
